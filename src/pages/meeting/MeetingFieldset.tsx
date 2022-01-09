import { useLanguageSchema } from 'providers/LanguageProvider';
import { MeetingDTOShort } from 'types/DTO/Meeting';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import MeetingContent from './MeetingContent';

interface Props {
  closeDrawer: () => void;
  fetchMeetings: Function;
  meeting?: MeetingDTOShort | null;
}

const MeetingFieldset = ({ closeDrawer, fetchMeetings, meeting }: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={meeting ? schema.editMeeting : schema.addMeeting}
        closeDrawer={closeDrawer}
      />
      <MeetingContent
        closeDrawer={closeDrawer}
        fetchMeetings={fetchMeetings}
        meeting={meeting}
      />
    </FieldsetStyled>
  );
};

export default MeetingFieldset;
