import { getApplicationsFor } from 'api/application/Application';
import { useQuery } from 'react-query';

export const useAppForQuery = () => {
  const query = useQuery(['applicationFor', 'control_ui'], () =>
    getApplicationsFor()
  );

  return query;
};
