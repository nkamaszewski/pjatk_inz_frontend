import styled from 'styled-components';
import MeetingContent from './MeetingContent';

const MeetingFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchMeetings: Function;
}

const MeetingFieldset = ({ closeDrawer, fetchMeetings }: Props) => {
  return (
    <MeetingFieldsetStyle>
      <MeetingContent closeDrawer={closeDrawer} fetchMeetings={fetchMeetings} />
    </MeetingFieldsetStyle>
  );
};

export default MeetingFieldset;
