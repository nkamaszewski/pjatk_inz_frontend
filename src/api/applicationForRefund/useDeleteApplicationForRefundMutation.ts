import axios from 'axios';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { deleteApplicationsForRefund } from './ApplicationForRefund';
import { APPLICATION_FOR_REFUND_QUERY_KEY } from './useApplicationsForRefundQuery';

export const useDeleteApplicationForRefundMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();
  const schema = useLanguageSchema();
  const mutation = useMutation(deleteApplicationsForRefund, {
    onSuccess: () => {
      queryClient.invalidateQueries(APPLICATION_FOR_REFUND_QUERY_KEY);
      setSuccessSnackbar(schema.theApplicationHasBeenDeleted);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setErrorSnackbar(error?.response?.data.message);
      }
    },
  });

  return mutation;
};
