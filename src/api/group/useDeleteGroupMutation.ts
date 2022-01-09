import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { deleteGroup } from './Group';
import { GROUPS_LIST_QUERY_KEY } from './useGroupsListQuery';

export const useDeleteGroupMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(deleteGroup, {
    onSuccess: () => {
      queryClient.invalidateQueries(GROUPS_LIST_QUERY_KEY);
      setSuccessSnackbar(schema.groupsRemoved);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
