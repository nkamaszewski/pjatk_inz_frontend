import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postMeeting } from '../../../api/Meeting';
import GroupSelect from '../../../components/controls_UI/GroupSelect';
import RoomSelect from '../../../components/controls_UI/RoomSelect';

const MeetingContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchMeetings: Function;
}

const MeetingContent = ({ closeDrawer, fetchMeetings }: Props) => {
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [idGroup, setIdGroup] = useState('');
  const [idRoom, setIdRoom] = useState('');

  const handleOnSave = () => {
    try {
      postMeeting({
        From: from,
        To: to,
        IdGroup: idGroup,
        IdRoom: idRoom,
      }).then(() => fetchMeetings());
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  return (
    <MeetingContentStyle>
      <h3>Dodaj Spotkanie</h3>
      <TextField
        label="Od"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={from}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFrom(new Date(event.target.value))
        }
      />
      <TextField
        label="Do"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={to}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTo(new Date(event.target.value))
        }
      />

      <GroupSelect value={idGroup} onChange={setIdGroup} />

      <RoomSelect value={idRoom} onChange={setIdRoom} />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        Zapisz
      </Button>
    </MeetingContentStyle>
  );
};

export default MeetingContent;
