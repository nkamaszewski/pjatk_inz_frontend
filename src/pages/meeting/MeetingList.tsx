import { Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import DeleteBtn from 'components/DeleteBtn';
import EditBtn from 'components/EditBtn';
import { formatDate } from 'helpers/formatDate';
import { useDrawer } from 'hooks/useDrawer';
import { useState } from 'react';
import styled from 'styled-components';
import {
  mapMeetingToShort,
  MeetingDTO,
  MeetingDTOShort,
} from '../../types/DTO/Meeting';
import MeetingFieldset from './MeetingFieldset';
import MeetingListHeader from './MeetingListHeader';
import { useMeetingCRUD } from './useMeetingCRUD';

const MeetingListStyle = styled.div`
  padding: 16px;

  .grid-meeting {
    display: grid;
    grid-template-columns: 300px 1fr 200px 200px 56px 56px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  meetings: MeetingDTO[];
  fetchMeetings: () => void;
}

const MeetingList = ({ meetings, fetchMeetings }: Props) => {
  const [meeting, setMeeting] = useState<MeetingDTOShort | null>(null);
  const { deleteItem } = useMeetingCRUD();
  const { open, openDrawer, closeDrawer } = useDrawer();

  const handleDeleteMeeting = async (id: string) => {
    await deleteItem(id);
    fetchMeetings();
  };
  return (
    <MeetingListStyle>
      <MeetingListHeader />
      {meetings.map((meeting) => (
        <Card key={meeting.IdMeeting} className="grid-meeting row">
          <p>{formatDate(meeting.From)}</p>
          <p>{formatDate(meeting.To)}</p>
          <p>{meeting.meetingGroup.Name}</p>
          <p>{meeting.meetingRoom.Name}</p>
          <EditBtn
            onClick={() => {
              setMeeting(mapMeetingToShort(meeting));
              openDrawer();
            }}
          />

          <DeleteBtn onClick={() => handleDeleteMeeting(meeting.IdMeeting)} />
        </Card>
      ))}

      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <MeetingFieldset
          closeDrawer={closeDrawer}
          fetchMeetings={fetchMeetings}
          meeting={meeting}
        />
      </Drawer>
    </MeetingListStyle>
  );
};

export default MeetingList;
