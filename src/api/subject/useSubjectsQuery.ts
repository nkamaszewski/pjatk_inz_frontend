import { useQuery } from 'react-query';
import { getSubjects } from './Subject';

export const SUBJECTS_QUERY_KEY = ['subjects'];

export const useSubjectsQuery = () => {
  const query = useQuery(SUBJECTS_QUERY_KEY, () => getSubjects());

  return query;
};
