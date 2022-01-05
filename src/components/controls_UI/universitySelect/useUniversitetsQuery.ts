import { getUniversitets } from 'api/Universitet';
import { useQuery } from 'react-query';

export const useUniversitetsQuery = () => {
  const query = useQuery(['universitets', 'control_ui'], () =>
    getUniversitets()
  );

  return query;
};
