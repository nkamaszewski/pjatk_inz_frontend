import { getRoles } from 'api/Role';
import { useQuery } from 'react-query';

export const ROLE_QUERY_KEY = ['roles', 'control_ui'];

export const useRoleQuery = () => {
  const query = useQuery(ROLE_QUERY_KEY, () => getRoles());

  return query;
};
