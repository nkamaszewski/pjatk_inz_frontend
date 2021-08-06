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
import { getCoaches, postCoach } from '../../api/Coach';
import { CoachDTO } from '../../types/DTO/Coach';
import PersonSelect from './PersonSelect';

const CoachSelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_COACH = {
  IdPerson: '',
  JobTitle: '',
  coachPerson: {},
} as CoachDTO;

const CoachSelect = ({ value, onChange }: Props) => {
  const [coaches, setCoaches]: [CoachDTO[], Function] = useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [coach, setCoach] = useState(EMPTY_COACH);

  const fetchCoaches = () => {
    try {
      getCoaches().then((res) => {
        setCoaches(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchCoaches, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoach((prevCoach) => ({
      ...prevCoach,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setCoach(EMPTY_COACH);
  };

  const handleOnConfirm = () => {
    try {
      postCoach(coach).then((res) => {
        setAddingMode(false);
        fetchCoaches();
        onChange(res.data.IdPerson);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setCoach(EMPTY_COACH);
    }
  };
  return (
    <CoachSelectStyle>
      <FormControl fullWidth>
        <InputLabel>Szkoleniowiec</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {coaches.map((c) => (
            <MenuItem key={c.IdPerson} value={c.IdPerson}>
              {`${c.coachPerson.FirstName} ${c.coachPerson.LastName} ${c.JobTitle}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title="dodaj szkoleniowca">
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>Dodaj szkoleniowca do bazy danych</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={coach.JobTitle}
            onChange={handleOnChange}
            margin="dense"
            name="JobTitle"
            label="Tytuł naukowy"
            type="text"
            fullWidth
          />
          <PersonSelect
            value={coach.IdPerson}
            onChange={(value: string) => {
              setCoach((prevCoach) => ({
                ...prevCoach,
                IdPerson: value,
              }));
            }}
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
    </CoachSelectStyle>
  );
};

export default CoachSelect;
