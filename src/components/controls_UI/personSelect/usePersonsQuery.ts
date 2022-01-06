import { getPersons } from 'api/Person';
import { useQuery } from 'react-query';

export const PERSONS_QUERY_KEY = ['persons', 'control_ui'];

export const usePersonsQuery = () => {
  const query = useQuery(PERSONS_QUERY_KEY, () => getPersons());

  return query;
};
