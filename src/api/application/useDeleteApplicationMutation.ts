import axios from 'axios';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { deleteApplicationsFor } from './Application';
import { APPLICATION_QUERY_KEY } from './useApplicationsQuery';

export const useDeleteApplicationMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();
  const mutation = useMutation(deleteApplicationsFor, {
    onSuccess: () => {
      queryClient.invalidateQueries(APPLICATION_QUERY_KEY);
      setSuccessSnackbar('Wniosek został usunięty');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setErrorSnackbar(error?.response?.data.message);
      }
    },
  });

  return mutation;
};
