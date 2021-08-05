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
import { getUniversitets, postUniversitet } from '../../api/Universitet';
import { UniversitetDTO } from '../../types/DTO/Universitet';

const UniuversitySelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_UNIVERSITET = {
  IdUniversity: '',
  Name: '',
  ShortName: '',
  City: '',
  PostalCode: '',
  Street: '',
  Number: 0,
} as UniversitetDTO;

const UniuversitySelect = ({ value, onChange }: Props) => {
  const [universitets, setUniversitets]: [UniversitetDTO[], Function] =
    useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [universitet, setUniversitet] = useState(EMPTY_UNIVERSITET);

  const fetchUniversitets = () => {
    try {
      getUniversitets().then((res) => {
        setUniversitets(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchUniversitets, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUniversitet((prevUni) => ({
      ...prevUni,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setUniversitet(EMPTY_UNIVERSITET);
  };

  const handleOnConfirm = () => {
    try {
      const uni: any = { ...universitet };
      delete uni.IdUniversity;
      postUniversitet(uni).then((res) => {
        setAddingMode(false);
        fetchUniversitets();
        onChange(res.data.IdUniversity);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setUniversitet(EMPTY_UNIVERSITET);
    }
  };
  return (
    <UniuversitySelectStyle>
      <FormControl fullWidth>
        <InputLabel>Uczelnia</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {universitets.map((uni) => (
            <MenuItem
              key={uni.IdUniversity}
              value={uni.IdUniversity}
            >{`${uni.ShortName} ${uni.City}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title="dodaj uczelnie">
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>Dodaj uczelnię do bazy danych</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={universitet.Name}
            onChange={handleOnChange}
            margin="dense"
            name="Name"
            label="Nazwa"
            type="text"
            fullWidth
          />
          <TextField
            value={universitet.ShortName}
            onChange={handleOnChange}
            margin="dense"
            name="ShortName"
            label="Skrócona nazwa"
            type="text"
            fullWidth
          />
          <TextField
            value={universitet.City}
            onChange={handleOnChange}
            margin="dense"
            name="City"
            label="Miasto"
            type="text"
            fullWidth
          />
          <TextField
            value={universitet.PostalCode}
            onChange={handleOnChange}
            margin="dense"
            name="PostalCode"
            label="Kod pocztowy"
            type="text"
            fullWidth
          />
          <TextField
            value={universitet.Street}
            onChange={handleOnChange}
            margin="dense"
            name="Street"
            label="Ulica"
            type="text"
            fullWidth
          />
          <TextField
            value={universitet.Number}
            onChange={handleOnChange}
            margin="dense"
            name="Number"
            label="Numer"
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
    </UniuversitySelectStyle>
  );
};

export default UniuversitySelect;
