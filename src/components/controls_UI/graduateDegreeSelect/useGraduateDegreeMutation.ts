import { postGraduateDegree } from 'api/Study';
import { useMutation, useQueryClient } from 'react-query';

export const useGraduateDegreeMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postGraduateDegree, {
    onSuccess: () => {
      queryClient.invalidateQueries(['graduateDegrees', 'controls_ui']);
    },
  });

  return mutation;
};
