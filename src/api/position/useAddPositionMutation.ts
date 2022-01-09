import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postPosition } from './Position';
import { POSITIONS_QUERY_KEY } from './usePositionsQuery';

export const useAddPositionMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(postPosition, {
    onSuccess: () => {
      queryClient.invalidateQueries(POSITIONS_QUERY_KEY);
      setSuccessSnackbar(schema.positionAdded);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
