import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postRoom, updateRoom } from '../../api/Room';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
import { ApplicationForRefundList } from '../../types/DTO/ApplicationForRefund';
import { RoomDTO } from '../../types/DTO/Room';

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
  const [name, setName] = useState('');
  const [area, setArea] = useState(0);
  const [capacitySet1, setCapacitySet1] = useState(0);
  const [capacitySet2, setCapacitySet2] = useState(0);
  const [capacitySet3, setCapacitySet3] = useState(0);
  const [capacitySet4, setCapacitySet4] = useState(0);
  const { setSnackbar } = useSnackbar();

  const handleOnSave = async () => {
    const newRoom = {
      Name: name,
      Area: area,
      CapacitySet1: capacitySet1,
      CapacitySet2: capacitySet2,
      CapacitySet3: capacitySet3,
      CapacitySet4: capacitySet4,
    };
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
      <TextField
        label="Nazwa"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />
      <TextField
        label="Powierzchnia w m2"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={area}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setArea(Number(event.target.value))
        }
      />
      <TextField
        label="Ustawienie kinowe"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={capacitySet1}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCapacitySet1(Number(event.target.value))
        }
      />
      <TextField
        label="Ustawienie 'U'"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={capacitySet2}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCapacitySet2(Number(event.target.value))
        }
      />
      <TextField
        label="Ustawienie 'U' bez stołu"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={capacitySet3}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCapacitySet3(Number(event.target.value))
        }
      />
      <TextField
        label="Ustawienie szkolne"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={capacitySet4}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCapacitySet4(Number(event.target.value))
        }
      />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        Zapisz
      </Button>
    </DocumentAdditionalContentStyle>
  );
};

export default DocumentAdditionalContent;
