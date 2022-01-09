import { postCoach } from 'api/coach/Coach';
import { useMutation, useQueryClient } from 'react-query';
import { COACH_QUERY_KEY } from './useCoachesQuery';

export const useCoachMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postCoach, {
    onSuccess: () => {
      queryClient.invalidateQueries(COACH_QUERY_KEY);
    },
  });

  return mutation;
};
