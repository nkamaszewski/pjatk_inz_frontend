import { postSubject } from 'api/Training';
import { useMutation, useQueryClient } from 'react-query';

export const useSubjectMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postSubject, {
    onSuccess: () => {
      queryClient.invalidateQueries(['subjects', 'controls_ui']);
    },
  });

  return mutation;
};
