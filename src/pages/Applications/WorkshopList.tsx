import { Divider, Drawer } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteApplicationsFor } from '../../api/Application';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { ApplicationForListDTO } from '../../types/DTO/ApplicationFor';
import WorkshopFieldset from './WorkshopFieldset';
import WorkshopListHeader from './WorkshopListHeader';

const WorkshopListStyle = styled.div`
  padding: 24px;

  .grid-workshop {
    display: grid;
    grid-template-columns: 240px 1fr 200px 56px 56px;
  }

  .row {
    padding: 16px;
  }
`;

interface Props {
  applications: ApplicationForListDTO[];
  fetchApplications: Function;
}

const WorkshopList = ({ applications, fetchApplications }: Props) => {
  const [editApplicationFor, setEditApplicationFor]: [
    ApplicationForListDTO | null,
    Function
  ] = useState(null);
  const { setSnackbar } = useSnackbar();

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteApplicationsFor(id);
      setSnackbar(createSnackbarSuccess('Usunięto wniosek!'));
      fetchApplications();
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Nie udało się usunąć wniosku!'));
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
      <WorkshopListHeader />
      {applications.map((application) => (
        <div key={application.IdApplicationFor}>
          <div className="grid-workshop row">
            <p>
              {new Date(application.DateOfSubmission)?.toLocaleDateString()}
            </p>
            <p>
              {application.Compatibility
                ? 'wniosek poprawny'
                : 'wniosek niepoprawny'}
            </p>
            <p>{application.applicationForStatus.Name}</p>
            <EditBtn onClick={() => setEditApplicationFor(application)} />
            <DeleteBtn
              onClick={() => handleDeleteItem(application.IdApplicationFor)}
            />
          </div>
          <Divider />
        </div>
      ))}
    </WorkshopListStyle>
  );
};

export default WorkshopList;
