import { getCompanies } from 'api/company/Company';
import { useQuery } from 'react-query';

export const COMPANIES_QUERY_KEY = ['companies'];

export const useCompaniesQuery = () => {
  const query = useQuery(COMPANIES_QUERY_KEY, () => getCompanies());

  return query;
};
