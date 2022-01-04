import { getGraduateDegrees } from 'api/Study';
import { useQuery } from 'react-query';

export const useGraduateDegreesQuery = () => {
  const query = useQuery(['graduateDegrees', 'control_ui'], () =>
    getGraduateDegrees()
  );

  return query;
};
