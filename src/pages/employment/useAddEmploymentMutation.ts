import { postEmployment } from 'api/Employment';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';

export const useAddEmploymentMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();

  const mutation = useMutation(postEmployment, {
    onSuccess: () => {
      queryClient.invalidateQueries('employments');
      setSuccessSnackbar('Dodano zatrudnienie');
    },
    onError: () => {
      setErrorSnackbar('Operacja nie udała się');
    },
  });
  return mutation;
};
