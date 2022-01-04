import { Button, TextField } from '@material-ui/core';
import { formatDate } from 'helpers/formatDate';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { MeetingDTOShort } from 'types/DTO/Meeting';
import GroupSelect from '../../components/controls_UI/groupSelect/GroupSelect';
import RoomSelect from '../../components/controls_UI/RoomSelect';
import { useMeetingCRUD } from './useMeetingCRUD';

const MeetingContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchMeetings: Function;
  meeting?: MeetingDTOShort | null;
}

const MeetingContent = ({ closeDrawer, fetchMeetings, meeting }: Props) => {
  const [from, setFrom] = useState(
    meeting ? formatDate(meeting.From) : formatDate(new Date())
  );
  const [to, setTo] = useState(
    meeting ? formatDate(meeting.To) : formatDate(new Date())
  );
  const [idGroup, setIdGroup] = useState(meeting ? meeting.IdGroup : '');
  const [idRoom, setIdRoom] = useState(meeting ? meeting.IdRoom : '');

  const { addItem, editItem } = useMeetingCRUD();

  const handleOnSave = async () => {
    if (meeting) {
      await editItem({
        IdMeeting: meeting.IdMeeting,
        From: from as string,
        To: to as string,
        IdGroup: idGroup,
        IdRoom: idRoom,
      });
    } else {
      await addItem({
        From: from as string,
        To: to as string,
        IdGroup: idGroup,
        IdRoom: idRoom,
      });
    }
    fetchMeetings();
    closeDrawer();
  };
  const {
    language: { schema },
  } = useLanguage();

  return (
    <MeetingContentStyle>
      <TextField
        label={schema.from}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={from}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFrom(event.target.value)
        }
      />
      <TextField
        label={schema.to}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={to}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTo(event.target.value)
        }
      />

      <GroupSelect value={idGroup} onChange={setIdGroup} />

      <RoomSelect value={idRoom} onChange={setIdRoom} />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        {schema.save}
      </Button>
    </MeetingContentStyle>
  );
};

export default MeetingContent;
