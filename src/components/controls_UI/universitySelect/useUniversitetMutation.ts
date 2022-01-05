import { postUniversitet } from 'api/Universitet';
import { useMutation, useQueryClient } from 'react-query';

export const useUniversitetMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postUniversitet, {
    onSuccess: () => {
      queryClient.invalidateQueries(['universitets', 'controls_ui']);
    },
  });

  return mutation;
};
