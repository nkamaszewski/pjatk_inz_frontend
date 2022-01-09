import { getPositions } from 'api/position/Position';
import { useQuery } from 'react-query';

export const POSITIONS_QUERY_KEY = ['positions'];

export const usePositionsQuery = () => {
  const query = useQuery(POSITIONS_QUERY_KEY, () => getPositions());

  return query;
};
