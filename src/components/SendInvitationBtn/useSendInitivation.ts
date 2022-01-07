import { postInviteUser } from 'api/InivitationUser';
import { useLanguage } from 'providers/LanguageProvider';
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
      setSnackbar(
        createSnackbarError(schema.theActivationLinkCouldNotBeSent)
      );
    }
  };
  const {
    language: { schema },
  } = useLanguage();

  return sendInvitation;
};
