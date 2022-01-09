import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { postGroup } from './Group';
import { GROUPS_LIST_QUERY_KEY } from './useGroupsListQuery';

export const useAddGroupMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(postGroup, {
    onSuccess: () => {
      queryClient.invalidateQueries(GROUPS_LIST_QUERY_KEY);
      setSuccessSnackbar(schema.groupsAdded);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
