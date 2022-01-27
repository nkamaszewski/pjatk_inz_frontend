import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { deleteRoom } from './Room';
import { ROOMS_QUERY_KEY } from './useRoomsQuery';

export const useDeleteRoomMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(deleteRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(ROOMS_QUERY_KEY);
      setSuccessSnackbar(schema.roomRemoved);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
