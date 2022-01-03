import { getCoaches } from 'api/Coach';
import { useQuery } from 'react-query';

export const useCoachesQuery = () => {
  const query = useQuery(['coaches', 'control_ui'], () => getCoaches());

  return query;
};
