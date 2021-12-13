import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
} from '@material-ui/core';
import EmployeeSeelect from 'components/controls_UI/EmployeeSeelect';
import { useState } from 'react';
import styled from 'styled-components';

const ParticipationFieldsetHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

interface ParticipationFieldsetHeaderProps {}

export const ParticipationFieldsetHeader =
  ({}: ParticipationFieldsetHeaderProps) => {
    const [addingMode, setAddingMode] = useState(false);
    const [idEmployee, setIdEmployee] = useState('');
    const handleOnCancel = () => {
      setAddingMode(false);
    };
    const handleOnConfirm = () => {
      setAddingMode(false);
    };
    return (
      <ParticipationFieldsetHeaderStyled>
        <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
          <DialogTitle>Przypisz pracownika</DialogTitle>
          <DialogContent style={{ width: '500px' }}>
            <EmployeeSeelect value={idEmployee} onChange={setIdEmployee} />
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
        <h3>Uczestnicy</h3>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setAddingMode(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </ParticipationFieldsetHeaderStyled>
    );
  };
