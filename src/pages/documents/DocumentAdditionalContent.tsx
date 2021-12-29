import { Button, TextField } from '@material-ui/core';
import { postAdditionalApplication } from 'api/AdditionalApplication';
import { formatDate } from 'helpers/formatDate';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { useState } from 'react';
import styled from 'styled-components';
import ApplicationForSelect from '../../components/controls_UI/ApplicationForSelect';
import { ApplicationForRefundList } from '../../types/DTO/ApplicationForRefund';

const DocumentAdditionalContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchDocuments: Function;
  editDocument?: ApplicationForRefundList | null;
}

const DocumentAdditionalContent = ({
  closeDrawer,
  fetchDocuments,
  editDocument,
}: Props) => {
  const [idAppFor, setIdAppFor] = useState('');
  const [name, setName] = useState('');
  const [dateOfSubmission, setDateOfSubmission] = useState(
    formatDate(new Date())
  );
  // const [appsForReason, setAppsForReason] = useState([]);
  const { setSnackbar } = useSnackbar();

  const handleSetName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  const handleSetDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfSubmission(event.target.value);
  };

  const handleOnSave = async () => {
    if (dateOfSubmission) {
      try {
        // if (editRoom) {
        //   await updateRoom({
        //     IdRoom: editRoom.IdRoom,
        //     ...newRoom,
        //   });
        // } else {

        await postAdditionalApplication({
          Id: idAppFor,
          Name: name,
          DateOfSubmission: dateOfSubmission,
        });

        fetchDocuments();
        setSnackbar(createSnackbarSuccess('Dodano wniosek'));
        // }
      } catch (e) {
        setSnackbar(createSnackbarError('Nie udało się dodać wniosku'));
        console.error(e);
      } finally {
        closeDrawer();
      }
    }
  };

  return (
    <DocumentAdditionalContentStyle>
      <ApplicationForSelect value={idAppFor} onChange={setIdAppFor} />
      <TextField
        name={name}
        type="text"
        value={name}
        label="Nazwa"
        onChange={handleSetName}
        autoComplete="off"
      />
      <TextField
        label="Data rejestracji"
        name="DateOfRegistration"
        type="date"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={dateOfSubmission}
        onChange={handleSetDate}
      />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        Zapisz
      </Button>
    </DocumentAdditionalContentStyle>
  );
};

export default DocumentAdditionalContent;
