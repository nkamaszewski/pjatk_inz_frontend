import { getPositions } from 'api/Position';
import { useQuery } from 'react-query';

export const usePositionsQuery = () => {
  const query = useQuery(['positions', 'control_ui'], () => getPositions());

  return query;
};
