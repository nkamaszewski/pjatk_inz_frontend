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
import { useLanguage } from 'providers/LanguageProvider';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PersonDTO } from '../../../types/DTO/Person';
import { usePersonMutation } from './usePersonMutation';
import { usePersonsQuery } from './usePersonsQuery';

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
  const [addingMode, setAddingMode] = useState(false);
  const [person, setPerson] = useState(EMPTY_PERSON);
  const personsQuery = usePersonsQuery();
  const personMutation = usePersonMutation();

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
      personMutation.mutateAsync(person).then((res) => {
        setAddingMode(false);
        onChange(res.data.IdPerson);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setPerson(EMPTY_PERSON);
    }
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <EmployeeSelectStyle>
      <FormControl fullWidth>
        <InputLabel>{schema.person}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {personsQuery.data?.data.map((person) => (
            <MenuItem
              key={person.IdPerson}
              value={person.IdPerson}
            >{`${person.FirstName} ${person.LastName}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title={schema.addAPerson}>
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.addAPersonToTheDatabase}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={person.FirstName}
            onChange={handleOnChange}
            margin="dense"
            name="FirstName"
            label={schema.firstName}
            type="text"
            fullWidth
          />
          <TextField
            value={person.LastName}
            onChange={handleOnChange}
            margin="dense"
            name="LastName"
            label={schema.lastName}
            type="text"
            fullWidth
          />
          <TextField
            value={person.Email}
            onChange={handleOnChange}
            margin="dense"
            name="Email"
            label={schema.emailInForm}
            type="email"
            fullWidth
          />
          <TextField
            value={person.Phone}
            onChange={handleOnChange}
            margin="dense"
            name="Phone"
            label={schema.phoneInForm}
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            {schema.cancel}
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            {schema.add}
          </Button>
        </DialogActions>
      </Dialog>
    </EmployeeSelectStyle>
  );
};

export default PersonSelect;
