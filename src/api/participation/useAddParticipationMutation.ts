import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postParticipation } from './Participation';
import { PARTICIPATIONS_QUERY_KEY } from './useParticipationsQuery';

export const useAddParticipationMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(postParticipation, {
    onSuccess: () => {
      queryClient.invalidateQueries(PARTICIPATIONS_QUERY_KEY);
      setSuccessSnackbar(schema.participantAdded);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
