import { getEmployees } from 'api/Employee';
import { useQuery } from 'react-query';

export const useEmployeesQuery = () => {
  const query = useQuery(['employees', 'control_ui'], () => getEmployees());

  return query;
};
