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
  const [date, setDate] = useState(new Date());
  const [hourFrom, setHourFrom] = useState(0);
  const [hourTo, setHourTo] = useState(0);
  const [idGroup, setIdGroup] = useState('');
  const [idRoom, setIdRoom] = useState('');

  const handleOnSave = () => {
    try {
      postMeeting({
        Date: date,
        HourFrom: hourFrom,
        HourTo: hourTo,
        IdGroup: idGroup,
        IdRoom: idRoom,
      }).then(() => fetchMeetings());
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
  };

  return (
    <MeetingContentStyle>
      <h3>Dodaj Spotkanie</h3>
      <TextField
        label="Data"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={date}
        onChange={handleDateChange}
      />
      <TextField
        label="Od godziny"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={hourTo}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setHourTo(Number(event.target.value))
        }
      />
      <TextField
        label="Do godziny"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={hourFrom}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setHourFrom(Number(event.target.value))
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
