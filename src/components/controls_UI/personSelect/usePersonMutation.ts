import { postPerson } from 'api/Person';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { PERSONS_QUERY_KEY } from './usePersonsQuery';

export const usePersonMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();
  const mutation = useMutation(postPerson, {
    onSuccess: () => {
      queryClient.invalidateQueries(PERSONS_QUERY_KEY);
      setSuccessSnackbar('Dodano osobę');
    },
    onError: (error: any) => {
      setErrorSnackbar(error?.message ?? 'Operacja nie udała się');
    },
  });

  return mutation;
};
