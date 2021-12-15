import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { ParticipationDTO } from 'types/DTO/Participation';
import { ParticipationForm } from './ParticipationForm';

const ParticipationFieldsetHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

interface ParticipationFieldsetHeaderProps {
  addParticipation: (
    participation: Omit<ParticipationDTO, 'IdParticipation' | 'IdEducation'>
  ) => Promise<void>;
}

export const ParticipationFieldsetHeader = ({
  addParticipation,
}: ParticipationFieldsetHeaderProps) => {
  const [addingMode, setAddingMode] = useState(false);

  return (
    <ParticipationFieldsetHeaderStyled>
      <ParticipationForm
        open={addingMode}
        setOpen={setAddingMode}
        addParticipation={addParticipation}
      />
      <h3>Uczestnicy</h3>
      <Fab color="primary" aria-label="add" onClick={() => setAddingMode(true)}>
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
    </ParticipationFieldsetHeaderStyled>
  );
};
