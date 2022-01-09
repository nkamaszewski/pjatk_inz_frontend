import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { updateTraining } from './Training';
import { TRAININGS_LIST_QUERY_KEY } from './useTrainingsListQuery';

export const useUpdateTrainingMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(updateTraining, {
    onSuccess: () => {
      queryClient.invalidateQueries(TRAININGS_LIST_QUERY_KEY);
      setSuccessSnackbar(schema.editTraining);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
