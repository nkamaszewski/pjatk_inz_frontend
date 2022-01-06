import { updateEmployment } from 'api/Employment';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';

export const useUpdateEmploymentMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();

  const mutation = useMutation(updateEmployment, {
    onSuccess: () => {
      queryClient.invalidateQueries('employments');
      setSuccessSnackbar('Edytowano zatrudnienie');
    },
    onError: () => {
      setErrorSnackbar('Operacja nie udała się');
    },
  });
  return mutation;
};
