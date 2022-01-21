import { getStudies } from 'api/study/Study';
import { useQuery } from 'react-query';

export const useStudiesQuery = () => {
  const query = useQuery(['studies'], () => getStudies());

  return query;
};
