import { postInviteUser } from 'api/InivitationUser';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';

export const useSendInvitation = () => {
  const { setSnackbar } = useSnackbar();
  const sendInvitation = async (email: string) => {
    try {
      await postInviteUser(email);
      setSnackbar(createSnackbarSuccess('wysłano link aktywacyjny'));
    } catch (e) {
      console.error(e);
      setSnackbar(
        createSnackbarError('nie udało się wysłać linku aktywacyjnego!')
      );
    }
  };
  return sendInvitation;
};
