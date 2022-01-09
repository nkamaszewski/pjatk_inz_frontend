import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postTraining } from './Training';
import { TRAININGS_LIST_QUERY_KEY } from './useTrainingsListQuery';

export const useAddTrainingMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(postTraining, {
    onSuccess: () => {
      queryClient.invalidateQueries(TRAININGS_LIST_QUERY_KEY);
      setSuccessSnackbar(schema.addTraining);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
