import { useQuery } from 'react-query';
import { getDivisions } from './Division';

export const DIVISIONS_QUERY_KEY = ['divisions'];

export const useDivisionQuery = () => {
  const query = useQuery(DIVISIONS_QUERY_KEY, () => getDivisions());

  return query;
};
