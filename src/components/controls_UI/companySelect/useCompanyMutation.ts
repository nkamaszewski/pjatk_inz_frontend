import { postCompany } from 'api/Company';
import { useMutation, useQueryClient } from 'react-query';

export const useCompanyMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries(['companies', 'controls_ui']);
    },
  });

  return mutation;
};
