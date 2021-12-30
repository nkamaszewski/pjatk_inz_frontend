import { updateEmployment } from 'api/Employment';
import { useMutation, useQueryClient } from 'react-query';

export const useUpdateEmploymentMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateEmployment, {
    onSuccess: () => {
      queryClient.invalidateQueries('employments');
    },
  });
  return mutation;
};
