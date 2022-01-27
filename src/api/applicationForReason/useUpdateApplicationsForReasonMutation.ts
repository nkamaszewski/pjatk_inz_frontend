import { APPLICATION_FOR_REFUND_QUERY_KEY } from 'api/applicationForRefund/useApplicationsForRefundQuery';
import axios from 'axios';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { updateApplicationsForReason } from './ApplicationForReason';

export const useUpdateApplicationsForReasonMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();
  const schema = useLanguageSchema();
  const mutation = useMutation(updateApplicationsForReason, {
    onSuccess: () => {
      queryClient.invalidateQueries(APPLICATION_FOR_REFUND_QUERY_KEY);
      setSuccessSnackbar(schema.applicationEdited);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setErrorSnackbar(error?.response?.data.message);
      }
    },
  });

  return mutation;
};
