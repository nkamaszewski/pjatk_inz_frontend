import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { GroupDTO } from '../../../types/DTO/Group';
import { MeetingDTO } from '../../../types/DTO/Meeting';
import MeetingListHeader from './MeetingListHeader';

const MeetingListStyle = styled.div`
  padding: 16px;

  .grid-meeting {
    display: grid;
    grid-template-columns: 1fr 300px 300px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  meetings: MeetingDTO[];
}

const MeetingList = ({ meetings }: Props) => {
  return (
    <MeetingListStyle>
      <MeetingListHeader />
      {meetings.map((meeting) => (
        <Card key={meeting.IdMeeting} className="grid-meeting row">
          <p>{meeting.Date}</p>
          <p>{meeting.HourFrom}</p>
          <p>{meeting.HourTo}</p>
        </Card>
      ))}
    </MeetingListStyle>
  );
};

export default MeetingList;
