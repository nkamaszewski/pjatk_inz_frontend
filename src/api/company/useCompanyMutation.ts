import { postCompany } from 'api/company/Company';
import { useMutation, useQueryClient } from 'react-query';
import { COMPANIES_QUERY_KEY } from './useCompaniesQuery';

export const useCompanyMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries(COMPANIES_QUERY_KEY);
    },
  });

  return mutation;
};
