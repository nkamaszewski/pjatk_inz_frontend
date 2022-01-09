import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { updateGroup } from './Group';
import { GROUPS_LIST_QUERY_KEY } from './useGroupsListQuery';

export const useUpdateGroupMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const schema = useLanguageSchema();

  const mutation = useMutation(updateGroup, {
    onSuccess: () => {
      queryClient.invalidateQueries(GROUPS_LIST_QUERY_KEY);
      setSuccessSnackbar(schema.groupsEdited);
    },
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
