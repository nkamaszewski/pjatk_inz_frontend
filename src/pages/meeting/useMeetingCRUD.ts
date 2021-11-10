import { deleteMeeting } from 'api/Meeting';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';

export const useMeetingCRUD = () => {
  const { setSnackbar } = useSnackbar();

  const deleteItem = async (id: string) => {
    try {
      await deleteMeeting(id);
      setSnackbar(createSnackbarSuccess('Usunięto spotkanie!'));
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Nie udało się usunąć spotkania!'));
    }
  };

  return { deleteItem };
};
