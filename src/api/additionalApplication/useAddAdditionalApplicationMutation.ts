import { APPLICATION_QUERY_KEY } from 'api/application/useApplicationsQuery';
import axios from 'axios';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postAdditionalApplication } from './AdditionalApplication';

export const useAddAdditionalApplicationMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();
  const schema = useLanguageSchema();
  const mutation = useMutation(postAdditionalApplication, {
    onSuccess: () => {
      queryClient.invalidateQueries(APPLICATION_QUERY_KEY);
      setSuccessSnackbar(schema.applicationAdded);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setErrorSnackbar(error?.response?.data.message);
      }
    },
  });

  return mutation;
};
