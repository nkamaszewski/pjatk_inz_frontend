import axios from 'axios';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { getApplicationFor } from './Application';
import { APPLICATION_QUERY_KEY } from './useApplicationsQuery';

export const useGetApplicationMutation = () => {
  const queryClient = useQueryClient();
  const { setErrorSnackbar } = useSnackbar();
  const mutation = useMutation(getApplicationFor, {
    onSuccess: () => {
      queryClient.invalidateQueries(APPLICATION_QUERY_KEY);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setErrorSnackbar(error?.response?.data.message);
      }
    },
  });

  return mutation;
};
