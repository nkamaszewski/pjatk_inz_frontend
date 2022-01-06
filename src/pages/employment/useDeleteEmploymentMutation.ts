import { deleteEmployment } from 'api/Employment';
import { useLanguage } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteEmploymentMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();

  const mutation = useMutation(
    ({ id }: { id: string }) => deleteEmployment(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('employments');
        setSuccessSnackbar(schema.employmentRemoved);
      },
      onError: (error: any) => {
        setErrorSnackbar(error?.message ?? schema.theOperationWasUnsuccessful);
      },
    }
  );
  const {
    language: { schema },
  } = useLanguage();

  return mutation;
};
