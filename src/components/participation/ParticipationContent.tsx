import { Card } from '@material-ui/core';
import DeleteBtn from 'components/DeleteBtn';
import styled from 'styled-components';
import { ParticipationsListDTO } from 'types/DTO/Participation';

const ParticipationContentStyled = styled.div`
  .grid-participation {
    padding: 16px;
    margin: 4px 0;
    display: grid;
    grid-template-columns: 200px 1fr 56px;
  }
`;

interface ParticipationContentProps {
  participations: ParticipationsListDTO[];
  removeParticipation: (id: string) => void;
}

export const ParticipationContent = ({
  participations,
  removeParticipation,
}: ParticipationContentProps) => {
  return (
    <ParticipationContentStyled>
      <header className="grid-participation">
        <p>Imię</p>
        <p>Nazwisko</p>
      </header>
      {participations.map((part) => (
        <Card key={part.IdEducation} className="grid-participation">
          <p>{part.participationEmployee.employeePerson.FirstName}</p>
          <p>{part.participationEmployee.employeePerson.LastName}</p>
          <DeleteBtn
            onClick={() => removeParticipation(part.IdParticipation)}
          />
        </Card>
      ))}
    </ParticipationContentStyled>
  );
};
