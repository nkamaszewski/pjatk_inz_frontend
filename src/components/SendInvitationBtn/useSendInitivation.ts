import { postInviteUser } from 'api/InivitationUser';
import { useLanguageSchema } from 'providers/LanguageProvider';
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
      setSnackbar(createSnackbarSuccess(schema.activationLinkHasBeenSent));
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError(schema.theActivationLinkCouldNotBeSent));
    }
  };
  const schema = useLanguageSchema();

  return sendInvitation;
};
