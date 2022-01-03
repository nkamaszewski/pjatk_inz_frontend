import { postCoach } from 'api/Coach';
import { useMutation, useQueryClient } from 'react-query';

export const useCoachMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postCoach, {
    onSuccess: () => {
      queryClient.invalidateQueries(['coaches', 'controls_ui']);
    },
  });

  return mutation;
};
