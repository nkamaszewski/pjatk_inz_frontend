import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { deleteMeeting } from './Meeting';
import { MEETINGS_QUERY_KEY } from './useMeetingsListQuery';

export const useDeleteMeetingMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(deleteMeeting, {
    onSuccess: () => {
      queryClient.invalidateQueries(MEETINGS_QUERY_KEY);
      setSuccessSnackbar(schema.meetingsRemoved);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
