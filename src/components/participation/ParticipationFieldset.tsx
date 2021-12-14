import styled from 'styled-components';
import { ParticipationContent } from './ParticipationContent';
import { ParticipationFieldsetHeader } from './ParticipationFieldsetHeader';

const ParticipationFieldsetStyled = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  IdEducation: string;
}

export const ParticipationFieldset = ({ IdEducation }: Props) => {
  return (
    <ParticipationFieldsetStyled>
      <ParticipationFieldsetHeader IdEducation={IdEducation} />
      <ParticipationContent />
    </ParticipationFieldsetStyled>
  );
};
