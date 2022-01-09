import { Button } from '@material-ui/core';
import { useAddMeetingMutation } from 'api/meeting/useAddMeetingMutation';
import { useUpdateMeetingMutation } from 'api/meeting/useUpdateMeetingMutation';
import { FormikTextField } from 'components/controls_UI/formik/FormikTextField';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { MeetingDTOShort } from 'types/DTO/Meeting';
import GroupSelect from '../../components/controls_UI/groupSelect/GroupSelect';
import RoomSelect from '../../components/controls_UI/roomSelect/RoomSelect';
import { useMeetingsForm } from './useMeetingsForm';

const MeetingContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  From: '',
  To: '',
  IdGroup: '',
  IdRoom: '',
};

interface Props {
  closeDrawer: Function;
  meeting?: MeetingDTOShort | null;
}

const MeetingContent = ({ closeDrawer, meeting }: Props) => {
  const addMutation = useAddMeetingMutation();
  const updateMutation = useUpdateMeetingMutation();
  const meetingForm = useMeetingsForm()({
    initialValues: meeting ?? initialValues,
    onSubmit: async (values) => {
      if (meeting) {
        await updateMutation.mutateAsync({
          ...values,
          IdMeeting: meeting.IdMeeting,
        });
      } else {
        await addMutation.mutateAsync(values);
      }
      closeDrawer();
    },
  });

  const schema = useLanguageSchema();

  return (
    <MeetingContentStyle>
      <FormikTextField
        label={schema.dateFrom}
        name="From"
        type="date"
        value={meetingForm.values.From}
        onChange={meetingForm.handleChange}
        onBlur={meetingForm.handleBlur}
        error={meetingForm.errors.From}
        touched={meetingForm.touched.From}
        autoFocus
      />
      <FormikTextField
        label={schema.dateTo}
        name="To"
        type="date"
        value={meetingForm.values.To}
        onChange={meetingForm.handleChange}
        onBlur={meetingForm.handleBlur}
        error={meetingForm.errors.To}
        touched={meetingForm.touched.To}
      />

      <GroupSelect
        value={meetingForm.values.IdGroup}
        onChange={(id) => meetingForm.setFieldValue('IdGroup', id)}
        name="IdGroup"
        onBlur={meetingForm.handleBlur}
        error={meetingForm.errors.IdGroup}
        touched={meetingForm.touched.IdGroup}
      />

      <RoomSelect
        value={meetingForm.values.IdRoom}
        onChange={(id) => meetingForm.setFieldValue('IdRoom', id)}
        name="IdRoom"
        onBlur={meetingForm.handleBlur}
        error={meetingForm.errors.IdRoom}
        touched={meetingForm.touched.IdRoom}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => meetingForm.handleSubmit()}
      >
        {schema.save}
      </Button>
    </MeetingContentStyle>
  );
};

export default MeetingContent;
