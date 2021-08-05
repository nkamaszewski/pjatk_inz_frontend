import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPersons, postPerson } from '../../api/Person';
import { PersonDTO } from '../../types/DTO/Person';

const EmployeeSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_PERSON = {
  FirstName: '',
  LastName: '',
  Email: '',
  Phone: 0,
} as PersonDTO;

const PersonSelect = ({ value, onChange }: Props) => {
  const [persons, setPersons]: [PersonDTO[], Function] = useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [person, setPerson] = useState(EMPTY_PERSON);

  const fetchEmployments = () => {
    try {
      getPersons().then((res) => {
        setPersons(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchEmployments, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setPerson(EMPTY_PERSON);
  };

  const handleOnConfirm = () => {
    try {
      postPerson(person).then((res) => {
        setAddingMode(false);
        fetchEmployments();
        onChange(res.data.IdPerson);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setPerson(EMPTY_PERSON);
    }
  };
  return (
    <EmployeeSelectStyle>
      <FormControl fullWidth>
        <InputLabel>Osoba</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {persons.map((person) => (
            <MenuItem
              key={person.IdPerson}
              value={person.IdPerson}
            >{`${person.FirstName} ${person.LastName}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title="dodaj osobę">
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>Dodaj osobę do bazy danych</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={person.FirstName}
            onChange={handleOnChange}
            margin="dense"
            name="FirstName"
            label="Imię"
            type="text"
            fullWidth
          />
          <TextField
            value={person.LastName}
            onChange={handleOnChange}
            margin="dense"
            name="LastName"
            label="Nazwisko"
            type="text"
            fullWidth
          />
          <TextField
            value={person.Email}
            onChange={handleOnChange}
            margin="dense"
            name="Email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            value={person.Phone}
            onChange={handleOnChange}
            margin="dense"
            name="Phone"
            label="Telefon"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </EmployeeSelectStyle>
  );
};

export default PersonSelect;
