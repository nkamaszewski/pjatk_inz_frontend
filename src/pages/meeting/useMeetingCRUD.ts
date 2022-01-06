import { deleteMeeting, postMeeting, updateMeeting } from 'api/Meeting';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import {
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { MeetingDTOShort } from 'types/DTO/Meeting';

export const useMeetingCRUD = () => {
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const addItem = async (meeting: Omit<MeetingDTOShort, 'IdMeeting'>) => {
    try {
      await postMeeting(meeting);
      setSnackbar(createSnackbarSuccess('Dodano spotkanie!'));
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await deleteMeeting(id);
      setSnackbar(createSnackbarSuccess('Usunięto spotkanie!'));
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };

  const editItem = async (meeting: MeetingDTOShort) => {
    try {
      await updateMeeting(meeting);
      setSnackbar(createSnackbarSuccess('Wyedytowano spotkanie!'));
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };

  return { addItem, deleteItem, editItem };
};
