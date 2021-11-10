import { deleteMeeting, postMeeting, updateMeeting } from 'api/Meeting';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { MeetingDTOShort } from 'types/DTO/Meeting';

export const useMeetingCRUD = () => {
  const { setSnackbar } = useSnackbar();

  const addItem = async (meeting: Omit<MeetingDTOShort, 'IdMeeting'>) => {
    try {
      await postMeeting(meeting);
      setSnackbar(createSnackbarSuccess('Dodano spotkanie!'));
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Nie udało się dodać spotkania!'));
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await deleteMeeting(id);
      setSnackbar(createSnackbarSuccess('Usunięto spotkanie!'));
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Nie udało się usunąć spotkania!'));
    }
  };

  const editItem = async (meeting: MeetingDTOShort) => {
    try {
      await updateMeeting(meeting);
      setSnackbar(createSnackbarSuccess('Wyedytowano spotkanie!'));
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Nie udało się wydedytować spotkania!'));
    }
  };

  return { addItem, deleteItem, editItem };
};
