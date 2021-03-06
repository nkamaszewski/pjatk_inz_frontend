import { deleteEmployment } from 'api/Employment';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

export const useDeleteEmploymentMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const mutation = useMutation(
    ({ id }: { id: string }) => deleteEmployment(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('employments');
        setSuccessSnackbar(schema.employmentRemoved);
      },
      onError: (error: any) => {
        handleHttpError(error);
        // setErrorSnackbar(error?.message ?? schema.theOperationWasUnsuccessful);
      },
    }
  );
  const schema = useLanguageSchema();

  return mutation;
};
