import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { deletePosition } from './Position';
import { POSITIONS_QUERY_KEY } from './usePositionsQuery';

export const useDeletePositionMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(deletePosition, {
    onSuccess: () => {
      queryClient.invalidateQueries(POSITIONS_QUERY_KEY);
      setSuccessSnackbar(schema.positionRemoved);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
