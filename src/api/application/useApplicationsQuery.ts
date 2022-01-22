import { useQuery } from 'react-query';
import { getApplicationsFor } from './Application';

export const APPLICATION_QUERY_KEY = ['applications'];

export const useApplicationsQuery = () => {
  const query = useQuery(APPLICATION_QUERY_KEY, () => getApplicationsFor());

  return query;
};
