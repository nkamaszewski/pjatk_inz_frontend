import { postEmployment } from 'api/Employment';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguage } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';

export const useAddEmploymentMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const mutation = useMutation(postEmployment, {
    onSuccess: () => {
      queryClient.invalidateQueries('employments');
      setSuccessSnackbar(schema.employmentAdded);
    },
    onError: (error: any) => {
      handleHttpError(error);
      // setErrorSnackbar(error?.message ?? schema.theOperationWasUnsuccessful);
    },
  });
  const {
    language: { schema },
  } = useLanguage();

  return mutation;
};
