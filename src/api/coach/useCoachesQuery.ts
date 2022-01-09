import { getCoaches } from 'api/coach/Coach';
import { useQuery } from 'react-query';

export const COACH_QUERY_KEY = ['coaches'];

export const useCoachesQuery = () => {
  const query = useQuery(COACH_QUERY_KEY, () => getCoaches());

  return query;
};
