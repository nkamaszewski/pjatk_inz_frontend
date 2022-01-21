import { Divider, Drawer } from '@material-ui/core';
import { formatDate } from 'helpers/formatDate';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { ApplicationForListDTO } from '../../types/DTO/ApplicationFor';
import { useApplication } from './useApplication';
import { TrainingApplicationsFieldset } from './TrainingApplicationsFieldset';
import { TrainingApplicationsListHeader } from './TrainingApplicationsListHeader';

const TrainingApplicationsListStyle = styled.div`
  padding: 24px;

  .grid-workshop {
    display: grid;
    grid-template-columns: 240px 240px 1fr 200px 200px 56px 56px;
  }

  .row {
    padding: 16px;
  }
`;

interface Props {
  applications: ApplicationForListDTO[];
}

export const TrainingApplicationsList = ({ applications }: Props) => {
  const { editApplicationFor, getForEdit, cancelEditing, deleteItem } =
    useApplication();

  const handleDeleteItem = async (id: string) => {
    await deleteItem(id);
  };

  const handleClickEdit = async (id: string) => {
    await getForEdit(id);
  };

  return (
    <TrainingApplicationsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editApplicationFor)}
        onClose={cancelEditing}
      >
        <TrainingApplicationsFieldset
          closeDrawer={cancelEditing}
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
