import { getTopics } from 'api/Training';
import { useQuery } from 'react-query';

export const useTopicsQuery = () => {
  const query = useQuery(['topics', 'control_ui'], () => getTopics());

  return query;
};
