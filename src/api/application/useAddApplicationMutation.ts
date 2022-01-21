import axios from 'axios';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postApplicationsFor } from './Application';
import { APPLICATION_QUERY_KEY } from './useApplicationsQuery';

export const useAddApplicationMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();
  const mutation = useMutation(postApplicationsFor, {
    onSuccess: () => {
      queryClient.invalidateQueries(APPLICATION_QUERY_KEY);
      setSuccessSnackbar('Wniosek został dodany');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setErrorSnackbar(error?.response?.data.message);
      }
    },
  });

  return mutation;
};
