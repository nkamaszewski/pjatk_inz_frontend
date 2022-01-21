import { postStudyMode } from 'api/study/Study';
import { useMutation, useQueryClient } from 'react-query';

export const useStudyModeMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postStudyMode, {
    onSuccess: () => {
      queryClient.invalidateQueries(['studyModes', 'controls_ui']);
    },
  });

  return mutation;
};
