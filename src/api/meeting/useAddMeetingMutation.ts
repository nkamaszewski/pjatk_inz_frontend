import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postMeeting } from './Meeting';
import { MEETINGS_QUERY_KEY } from './useMeetingsListQuery';

export const useAddMeetingMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(postMeeting, {
    onSuccess: () => {
      queryClient.invalidateQueries(MEETINGS_QUERY_KEY);
      setSuccessSnackbar(schema.meetingsAdded);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
