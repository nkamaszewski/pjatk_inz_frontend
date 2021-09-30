import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import ApplicationForSelect from '../../components/controls_UI/ApplicationForSelect';
import StatusSelect from '../../components/controls_UI/StatusSelect';
import { useSnackbar } from '../../providers/NotificationContext';
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
  const [idStatus, setIdStatus] = useState('');
  const [appsForReason, setAppsForReason] = useState([]);
  const { setSnackbar } = useSnackbar();

  const handleOnSave = async () => {
    // try {
    //   if (editRoom) {
    //     await updateRoom({
    //       IdRoom: editRoom.IdRoom,
    //       ...newRoom,
    //     });
    //   } else {
    //     await postRoom(newRoom);
    //     fetchRooms();
    //     setSnackbar(createSnackbarSuccess('Dodano salę'));
    //   }
    // } catch (e) {
    //   setSnackbar(createSnackbarSuccess('Operacja nie powiodła się!'));
    //   console.error(e);
    // } finally {
    //   closeDrawer();
    // }
  };

  return (
    <DocumentAdditionalContentStyle>
      <ApplicationForSelect value={idAppFor} onChange={setIdAppFor} />
      <StatusSelect
        value={idStatus}
        onChange={(
          event: React.ChangeEvent<{
            value: unknown;
            name?: string | undefined;
          }>
        ) => setIdStatus(event.target.value as string)}
      />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        Zapisz
      </Button>
    </DocumentAdditionalContentStyle>
  );
};

export default DocumentAdditionalContent;
