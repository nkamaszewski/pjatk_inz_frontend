import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import DeleteBtn from 'components/DeleteBtn';
import { formatDate } from 'helpers/formatDate';
import styled from 'styled-components';
import { MeetingDTO } from '../../types/DTO/Meeting';
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
  const { deleteItem } = useMeetingCRUD();

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
          <Button
            onClick={() => {
              // setGroup(group);
              // setIsOpen(true);
            }}
          >
            <FontAwesomeIcon className="primary--color" icon={faSitemap} />
          </Button>
          <DeleteBtn onClick={() => handleDeleteMeeting(meeting.IdMeeting)} />
        </Card>
      ))}
    </MeetingListStyle>
  );
};

export default MeetingList;
