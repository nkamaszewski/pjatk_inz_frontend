import styled from 'styled-components';
import { ParticipationContent } from './ParticipationContent';
import { ParticipationFieldsetHeader } from './ParticipationFieldsetHeader';

const ParticipationFieldsetStyled = styled.div`
  padding: 24px;
  width: 600px;
`;

export const ParticipationFieldset = () => {
  return (
    <ParticipationFieldsetStyled>
      <ParticipationFieldsetHeader />
      <ParticipationContent />
    </ParticipationFieldsetStyled>
  );
};
