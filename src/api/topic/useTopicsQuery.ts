import { useQuery } from 'react-query';
import { getTopics } from './Topic';

export const TOPICS_QUERY_KEY = ['topics'];

export const useTopicsQuery = () => {
  const query = useQuery(TOPICS_QUERY_KEY, () => getTopics());

  return query;
};
