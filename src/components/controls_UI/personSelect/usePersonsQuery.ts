import { getPersons } from 'api/Person';
import { useQuery } from 'react-query';

export const usePersonsQuery = () => {
  const query = useQuery(['persons', 'control_ui'], () => getPersons());

  return query;
};
