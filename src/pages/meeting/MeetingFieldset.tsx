import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import MeetingContent from './MeetingContent';

interface Props {
  closeDrawer: () => void;
  fetchMeetings: Function;
}

const MeetingFieldset = ({ closeDrawer, fetchMeetings }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj spotkanie`} closeDrawer={closeDrawer} />
      <MeetingContent closeDrawer={closeDrawer} fetchMeetings={fetchMeetings} />
    </FieldsetStyled>
  );
};

export default MeetingFieldset;
