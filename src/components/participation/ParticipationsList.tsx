import { Card } from '@material-ui/core';
import { getPaticipateCeritification } from 'api/participation/Participation';
import { useDeleteParticipationMutation } from 'api/participation/useDeleteParticipationMutation';
import DeleteBtn from 'components/DeleteBtn';
import { DownloadBtn } from 'components/DownloadBtn';
import EditBtn from 'components/EditBtn';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import {
  ParticipationDTO,
  ParticipationsListDTO,
} from 'types/DTO/Participation';
import { ParticipationForm } from './ParticipationForm';

const ParticipationsListStyled = styled.div`
  .grid-participation {
    padding: 16px;
    margin: 4px 0;
    display: grid;
    grid-template-columns: 200px 1fr 56px 56px 56px;
  }
`;

interface ParticipationsListProps {
  participations: ParticipationsListDTO[];
}

export const ParticipationsList = ({
  participations,
}: ParticipationsListProps) => {
  const [editedParticipation, setEditedParticipation] =
    useState<ParticipationDTO | null>(null);
  const deleteMutation = useDeleteParticipationMutation();
  const handleCloseDrawer = () => setEditedParticipation(null);
  const schema = useLanguageSchema();

  const downloadFile = async (
    id: string,
    lastName: string,
    firstName: string
  ) => {
    const res = await getPaticipateCeritification(id);
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `certyfikat_${lastName}_${firstName}.pdf`);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <ParticipationsListStyled>
      {Boolean(editedParticipation) && (
        <ParticipationForm
          open={Boolean(editedParticipation)}
          close={handleCloseDrawer}
          IdEducation={editedParticipation?.IdEducation ?? ''}
          editedParticipation={editedParticipation}
        />
      )}
      <header className="grid-participation">
        <p>{schema.firstName}</p>
        <p>{schema.lastName}</p>
      </header>
      {participations.map((part) => (
        <Card key={part.IdEducation} className="grid-participation">
          <p>{part.participationEmployee.employeePerson.FirstName}</p>
          <p>{part.participationEmployee.employeePerson.LastName}</p>
          {part.CertificateOfCompletion ? (
            <DownloadBtn
              onClick={() =>
                downloadFile(
                  part.IdParticipation,
                  part.participationEmployee.employeePerson.LastName,
                  part.participationEmployee.employeePerson.FirstName
                )
              }
            />
          ) : (
            <p />
          )}
          <EditBtn onClick={() => setEditedParticipation(part)} />
          <DeleteBtn
            onClick={() => deleteMutation.mutate({ id: part.IdParticipation })}
          />
        </Card>
      ))}
    </ParticipationsListStyled>
  );
};
