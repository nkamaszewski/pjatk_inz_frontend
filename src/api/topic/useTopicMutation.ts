import { useMutation, useQueryClient } from 'react-query';
import { postTopic } from './Topic';
import { TOPICS_QUERY_KEY } from './useTopicsQuery';

export const useTopicMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postTopic, {
    onSuccess: () => {
      queryClient.invalidateQueries(TOPICS_QUERY_KEY);
    },
  });

  return mutation;
};
