import { Divider, Drawer } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { deleteApplicationsFor } from '../../api/Application';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { NotificationContext } from '../../contexts/NotificationContext';
import {
  createSnackbarError,
  createSnackbarSuccess,
} from '../../hooks/useNotification';
import { ApplicationForDTO } from '../../types/DTO/ApplicationFor';
import WorkshopFieldset from './WorkshopFieldset';
import PollsFieldset from './WorkshopFieldset';

const WorkshopListStyle = styled.div`
  padding: 24px;

  .row-content {
    display: grid;
    grid-template-columns: 1fr 56px;
  }
`;

interface Props {
  applications: ApplicationForDTO[];
  fetchApplications: Function;
}

const WorkshopList = ({ applications, fetchApplications }: Props) => {
  const [editApplicationFor, setEditApplicationFor]: [
    ApplicationForDTO | null,
    Function
  ] = useState(null);
  const notificationCtx = useContext(NotificationContext);

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteApplicationsFor(id);
      notificationCtx.setSnackbar(createSnackbarSuccess('Usunięto wniosek!'));
      fetchApplications();
    } catch (e) {
      console.error(e);
      notificationCtx.setSnackbar(
        createSnackbarError('Nie udało się usunąć wniosku!')
      );
    }
  };

  const handleCloseDrawer = () => setEditApplicationFor(null);

  return (
    <WorkshopListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editApplicationFor)}
        onClose={handleCloseDrawer}
      >
        <WorkshopFieldset
          closeDrawer={handleCloseDrawer}
          fetchApplications={fetchApplications}
          editApplicationFor={editApplicationFor}
        />
      </Drawer>
      {applications.map((application) => (
        <div className="row-content" key={application.IdApplicationFor}>
          <p>{application.DateOfSubmission}</p>
          <p>{application.Compability}</p>
          <EditBtn onClick={() => setEditApplicationFor(application)} />
          <DeleteBtn
            onClick={() => handleDeleteItem(application.IdApplicationFor)}
          />
          <Divider />
        </div>
      ))}
    </WorkshopListStyle>
  );
};

export default WorkshopList;
