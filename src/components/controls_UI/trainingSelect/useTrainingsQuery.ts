import { getTrainings } from 'api/Training';
import { useQuery } from 'react-query';

export const useTrainingsQuery = () => {
  const query = useQuery(['trainings', 'control_ui'], () => getTrainings());

  return query;
};
