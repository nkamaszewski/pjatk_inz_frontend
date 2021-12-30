import { getEmployments } from 'api/Employment';
import { useQuery } from 'react-query';

export const useEmploymentQuery = () => {
  const query = useQuery(['employments'], () => getEmployments());

  return query;
};
