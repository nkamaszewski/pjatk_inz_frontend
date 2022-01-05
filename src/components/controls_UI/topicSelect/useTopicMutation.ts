import { postTopic } from 'api/Training';
import { useMutation, useQueryClient } from 'react-query';

export const useTopicMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postTopic, {
    onSuccess: () => {
      queryClient.invalidateQueries(['topics', 'controls_ui']);
    },
  });

  return mutation;
};
