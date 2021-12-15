import styled from 'styled-components';
import { ParticipationContent } from './ParticipationContent';
import { ParticipationFieldsetHeader } from './ParticipationFieldsetHeader';
import { useParticipationsList } from './useParticipationsList';

const ParticipationFieldsetStyled = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  IdEducation: string;
}

export const ParticipationFieldset = ({ IdEducation }: Props) => {
  const { participations, addParticipation, removeParticipation } =
    useParticipationsList(IdEducation);
  return (
    <ParticipationFieldsetStyled>
      <ParticipationFieldsetHeader addParticipation={addParticipation} />
      <ParticipationContent
        participations={participations}
        removeParticipation={removeParticipation}
      />
    </ParticipationFieldsetStyled>
  );
};
