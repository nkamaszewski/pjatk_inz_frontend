import { useMutation, useQueryClient } from 'react-query';
import { postSubject } from './Subject';
import { SUBJECTS_QUERY_KEY } from './useSubjectsQuery';

export const useSubjectMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postSubject, {
    onSuccess: () => {
      queryClient.invalidateQueries(SUBJECTS_QUERY_KEY);
    },
  });

  return mutation;
};
