import { useQuery } from 'react-query';
import { getIssues } from './Issue';

export const ISSUES_QUERY_KEY = ['issues'];

export const useIssuesQuery = () => {
  const query = useQuery(ISSUES_QUERY_KEY, () => getIssues());

  return query;
};
