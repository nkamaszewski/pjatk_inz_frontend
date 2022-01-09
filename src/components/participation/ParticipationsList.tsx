import { Card } from '@material-ui/core';
import { useDeleteParticipationMutation } from 'api/participation/useDeleteParticipationMutation';
import DeleteBtn from 'components/DeleteBtn';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { ParticipationsListDTO } from 'types/DTO/Participation';

const ParticipationsListStyled = styled.div`
  .grid-participation {
    padding: 16px;
    margin: 4px 0;
    display: grid;
    grid-template-columns: 200px 1fr 56px;
  }
`;

interface ParticipationsListProps {
  participations: ParticipationsListDTO[];
}

export const ParticipationsList = ({
  participations,
}: ParticipationsListProps) => {
  const deleteMutation = useDeleteParticipationMutation();
  const schema = useLanguageSchema();

  return (
    <ParticipationsListStyled>
      <header className="grid-participation">
        <p>{schema.firstName}</p>
        <p>{schema.lastName}</p>
      </header>
      {participations.map((part) => (
        <Card key={part.IdEducation} className="grid-participation">
          <p>{part.participationEmployee.employeePerson.FirstName}</p>
          <p>{part.participationEmployee.employeePerson.LastName}</p>
          <DeleteBtn
            onClick={() => deleteMutation.mutate({ id: part.IdParticipation })}
          />
        </Card>
      ))}
    </ParticipationsListStyled>
  );
};
