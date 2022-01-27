import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { updateRoom } from './Room';
import { ROOMS_QUERY_KEY } from './useRoomsQuery';

export const useUpdateRoomMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(updateRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(ROOMS_QUERY_KEY);
      setSuccessSnackbar(schema.roomEdited);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
