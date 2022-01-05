import { postPerson } from 'api/Person';
import { useMutation, useQueryClient } from 'react-query';

export const usePersonMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postPerson, {
    onSuccess: () => {
      queryClient.invalidateQueries(['persons', 'controls_ui']);
    },
  });

  return mutation;
};
