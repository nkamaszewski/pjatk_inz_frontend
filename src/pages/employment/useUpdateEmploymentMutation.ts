import { updateEmployment } from 'api/Employment';
import { useLanguage } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';

export const useUpdateEmploymentMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();

  const mutation = useMutation(updateEmployment, {
    onSuccess: () => {
      queryClient.invalidateQueries('employments');
      setSuccessSnackbar(schema.employmentWasEdited);
    },
    onError: (error: any) => {
      setErrorSnackbar(error?.message ?? schema.theOperationWasUnsuccessful);
    },
  });
  const {
    language: { schema },
  } = useLanguage();

  return mutation;
};
