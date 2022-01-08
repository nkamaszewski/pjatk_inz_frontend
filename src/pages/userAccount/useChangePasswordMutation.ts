import { postChangePassword } from 'api/Password';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation } from 'react-query';

export const useChangePasswordMutation = () => {
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const mutation = useMutation(postChangePassword, {
    onSuccess: () => {
      setSuccessSnackbar('hasło zostało zmienione');
    },
    onError: (error: any) => {
      handleHttpError(error);
      // setErrorSnackbar(error?.message ?? schema.theOperationWasUnsuccessful);
    },
  });

  return mutation;
};
