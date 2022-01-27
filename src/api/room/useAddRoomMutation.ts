import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postRoom } from './Room';
import { ROOMS_QUERY_KEY } from './useRoomsQuery';

export const useAddRoomMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(postRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(ROOMS_QUERY_KEY);
      setSuccessSnackbar(schema.roomAdded);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
