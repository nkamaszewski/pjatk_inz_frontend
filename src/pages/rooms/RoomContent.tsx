import { Button, TextField } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postRoom, updateRoom } from '../../api/Room';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { RoomDTO } from '../../types/DTO/Room';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

const RoomContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchRooms: Function;
  editRoom?: RoomDTO | null;
}

const RoomContent = ({ closeDrawer, fetchRooms, editRoom }: Props) => {
  const [name, setName] = useState(editRoom?.Name ?? '');
  const [area, setArea] = useState(editRoom?.Area ?? 0);
  const [capacitySet1, setCapacitySet1] = useState(editRoom?.CapacitySet1 ?? 0);
  const [capacitySet2, setCapacitySet2] = useState(editRoom?.CapacitySet2 ?? 0);
  const [capacitySet3, setCapacitySet3] = useState(editRoom?.CapacitySet3 ?? 0);
  const [capacitySet4, setCapacitySet4] = useState(editRoom?.CapacitySet4 ?? 0);
  const { setSnackbar } = useSnackbar();
	const handleHttpError = useHandleHttpError();

  const handleOnSave = async () => {
    const newRoom = {
      Name: name,
      Area: area,
      CapacitySet1: capacitySet1,
      CapacitySet2: capacitySet2,
      CapacitySet3: capacitySet3,
      CapacitySet4: capacitySet4,
    };
    try {
      if (editRoom) {
        await updateRoom({
          IdRoom: editRoom.IdRoom,
          ...newRoom,
        });
        setSnackbar(createSnackbarSuccess('Edytowano salę'));
        closeDrawer();
      } else {
        await postRoom(newRoom);
        setSnackbar(createSnackbarSuccess('Dodano salę'));
        closeDrawer();
      }
      fetchRooms();
    } catch (e) {
			handleHttpError(e);
      console.error(e);
    }
  };
  const {
    language: { schema },
  } = useLanguage();

  return (
    <RoomContentStyle>
      <TextField
        label={schema.name}
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
        label={schema.areaInM2}
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
        label={schema.cinemaSetting}
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
        label={schema.uSetting}
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
        label={schema.settingUWithoutTable}
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
        label={schema.schoolSetting}
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
        {schema.save}
      </Button>
    </RoomContentStyle>
  );
};

export default RoomContent;
