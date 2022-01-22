import { Divider, Drawer } from '@material-ui/core';
import { useDeleteApplicationMutation } from 'api/application/useDeleteApplicationMutation';
import { useGetApplicationMutation } from 'api/application/useGetApplicationMutation';
import { formatDate } from 'helpers/formatDate';
import { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
  ApplicationForDTO,
  ApplicationForListDTO,
} from '../../types/DTO/ApplicationFor';
import { AddAdditionalBtn } from './AddAdditionalBtn';
import { TrainingApplicationsFieldset } from './TrainingApplicationsFieldset';
import { TrainingApplicationsListHeader } from './TrainingApplicationsListHeader';

const TrainingApplicationsListStyle = styled.div`
  padding: 24px;

  .grid-workshop {
    display: grid;
    grid-template-columns: 240px 240px 1fr 200px 200px 56px 56px 56px;
  }

  .row {
    padding: 16px;
  }
`;

interface Props {
  applications: ApplicationForListDTO[];
}

export const TrainingApplicationsList = ({ applications }: Props) => {
  const [editApplicationFor, setEditApplicationFor] =
    useState<ApplicationForDTO | null>(null);
  const deleteMutation = useDeleteApplicationMutation();
  const getMutation = useGetApplicationMutation();
  const handleCloseDrawer = () => setEditApplicationFor(null);
  const handleDeleteItem = async (id: string) => {
    await deleteMutation.mutateAsync(id);
  };

  const handleClickEdit = async (id: string) => {
    const response = await getMutation.mutateAsync(id);
    if (response.data) {
      setEditApplicationFor(response.data);
    }
  };

  return (
    <TrainingApplicationsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editApplicationFor)}
        onClose={handleCloseDrawer}
      >
        <TrainingApplicationsFieldset
          closeDrawer={handleCloseDrawer}
          editApplicationFor={editApplicationFor}
        />
      </Drawer>
      <TrainingApplicationsListHeader />
      {applications.map((application) => (
        <div key={application.IdApplicationFor}>
          <div className="grid-workshop row">
            <p>{formatDate(application.DateOfSubmission)}</p>
            <p>
              {application.FirstName} {application.LastName}
            </p>
            <p>{application.Nazwa}</p>
            <p>
              {application.Compatibility
                ? 'wniosek zgodny'
                : 'wniosek niezgodny'}
            </p>
            <p>{application.Status}</p>
            {application.Status.includes('Zatwierdzony') ? (
              <AddAdditionalBtn
                IdApplicationFor={application.IdApplicationFor}
              />
            ) : (
              <span />
            )}
            <EditBtn
              onClick={() => handleClickEdit(application.IdApplicationFor)}
            />
            <DeleteBtn
              onClick={() => handleDeleteItem(application.IdApplicationFor)}
            />
          </div>
          <Divider />
        </div>
      ))}
    </TrainingApplicationsListStyle>
  );
};
