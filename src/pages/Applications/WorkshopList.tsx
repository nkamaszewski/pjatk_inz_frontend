import { Divider, Drawer } from '@material-ui/core';
import { formatDate } from 'helpers/formatDate';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { ApplicationForListDTO } from '../../types/DTO/ApplicationFor';
import { useApplication } from './useApplication';
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
  const { editApplicationFor, getForEdit, cancelEditing, deleteItem } =
    useApplication(fetchApplications);

  const handleDeleteItem = async (id: string) => {
    await deleteItem(id);
  };

  const handleClickEdit = async (id: string) => {
    await getForEdit(id);
  };

  return (
    <WorkshopListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editApplicationFor)}
        onClose={cancelEditing}
      >
        <WorkshopFieldset
          closeDrawer={cancelEditing}
          fetchApplications={fetchApplications}
          editApplicationFor={editApplicationFor}
        />
      </Drawer>
      <WorkshopListHeader />
      {applications.map((application) => (
        <div key={application.IdApplicationFor}>
          <div className="grid-workshop row">
            <p>{formatDate(application.DateOfSubmission)}</p>
            <p>
              {application.Compatibility
                ? 'wniosek poprawny'
                : 'wniosek niepoprawny'}
            </p>
            <p>{application.Status}</p>
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
    </WorkshopListStyle>
  );
};

export default WorkshopList;
