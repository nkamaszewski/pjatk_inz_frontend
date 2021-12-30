import { deleteEmployment } from 'api/Employment';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteEmploymentMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ id }: { id: string }) => deleteEmployment(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('employments');
      },
    }
  );
  return mutation;
};
