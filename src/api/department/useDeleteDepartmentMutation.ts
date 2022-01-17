import { DEPARTMENTS_QUERY_KEY } from 'api/department/useDepartmentsQuery';
import { DIVISIONS_QUERY_KEY } from 'api/division/useDivisionQuery';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { deleteDepartment } from './Department';

export const useDeleteDepartmentMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();
  const mutation = useMutation(deleteDepartment, {
    onSuccess: () => {
      queryClient.invalidateQueries(DIVISIONS_QUERY_KEY);
      queryClient.invalidateQueries(DEPARTMENTS_QUERY_KEY);
      setSuccessSnackbar(schema.deleteDepartment);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
