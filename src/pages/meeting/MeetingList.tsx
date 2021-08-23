import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { MeetingDTO } from '../../types/DTO/Meeting';
import MeetingListHeader from './MeetingListHeader';

const MeetingListStyle = styled.div`
  padding: 16px;

  .grid-meeting {
    display: grid;
    grid-template-columns: 300px 300px;
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
          <p>{meeting.From}</p>
          <p>{meeting.To}</p>
        </Card>
      ))}
    </MeetingListStyle>
  );
};

export default MeetingList;
