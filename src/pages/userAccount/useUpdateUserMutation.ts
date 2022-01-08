import { updateUser } from 'api/User';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation } from 'react-query';

export const useUpdateUserMutation = () => {
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      setSuccessSnackbar('dane zostały zmienione');
    },
    onError: (error: any) => {
      handleHttpError(error);
      // setErrorSnackbar(error?.message ?? schema.theOperationWasUnsuccessful);
    },
  });

  return mutation;
};
