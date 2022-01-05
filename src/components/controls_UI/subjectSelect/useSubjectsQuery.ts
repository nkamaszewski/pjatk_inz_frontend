import { getSubjects } from 'api/Training';
import { useQuery } from 'react-query';

export const useSubjectsQuery = () => {
  const query = useQuery(['subjects', 'control_ui'], () => getSubjects());

  return query;
};
