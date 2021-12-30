import { postEmployment } from 'api/Employment';
import { useMutation, useQueryClient } from 'react-query';

export const useAddEmploymentMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(postEmployment, {
    onSuccess: () => {
      queryClient.invalidateQueries('employments');
    },
  });
  return mutation;
};
