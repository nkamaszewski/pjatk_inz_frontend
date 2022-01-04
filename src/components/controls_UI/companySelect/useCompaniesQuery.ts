import { getCompanies } from 'api/Company';
import { useQuery } from 'react-query';

export const useCompaniesQuery = () => {
  const query = useQuery(['companies', 'control_ui'], () => getCompanies());

  return query;
};
