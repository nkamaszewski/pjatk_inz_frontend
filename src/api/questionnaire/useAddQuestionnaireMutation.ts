import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postQuestionnaire } from './Questionnaire';
import { QUESTIONNAIRES_QUERY_KEY } from './useQuestionnaireQuery';

export const useAddQuestionnaireMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(postQuestionnaire, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUESTIONNAIRES_QUERY_KEY);
      setSuccessSnackbar(schema.questionnaireAdded);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
