import { DEPARTMENTS_QUERY_KEY } from 'api/department/useDepartmentsQuery';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { deleteDivision } from './Division';
import { DIVISIONS_QUERY_KEY } from './useDivisionQuery';

export const useDeleteDivisionMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();
  const mutation = useMutation(deleteDivision, {
    onSuccess: () => {
      queryClient.invalidateQueries(DIVISIONS_QUERY_KEY);
      queryClient.invalidateQueries(DEPARTMENTS_QUERY_KEY);
      setSuccessSnackbar(schema.deleteDivision);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
