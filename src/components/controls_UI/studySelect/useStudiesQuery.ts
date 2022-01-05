import { getStudies } from 'api/Study';
import { useQuery } from 'react-query';

export const useStudiesQuery = () => {
  const query = useQuery(['studies', 'control_ui'], () => getStudies());

  return query;
};
