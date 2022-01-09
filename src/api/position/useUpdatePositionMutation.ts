import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { updatePosition } from './Position';
import { POSITIONS_QUERY_KEY } from './usePositionsQuery';

export const useUpdatePositionMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(updatePosition, {
    onSuccess: () => {
      queryClient.invalidateQueries(POSITIONS_QUERY_KEY);
      setSuccessSnackbar(schema.positionEdited);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
