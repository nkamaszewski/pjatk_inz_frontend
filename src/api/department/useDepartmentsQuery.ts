import { useQuery } from 'react-query';
import { getDepartments } from './Department';

export const DEPARTMENTS_QUERY_KEY = ['departments'];

export const useDepartmentsQuery = () => {
  const query = useQuery(DEPARTMENTS_QUERY_KEY, () => getDepartments());

  return query;
};
