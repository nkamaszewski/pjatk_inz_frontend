import { useFilter } from 'providers/FilterContext';
import { useQuery } from 'react-query';
import { getTrainings } from './Training';

export const TRAININGS_LIST_QUERY_KEY = ['trainings'];

export const useTrainingsListQuery = () => {
  const {
    training: { filters },
  } = useFilter();

  const query = useQuery([...TRAININGS_LIST_QUERY_KEY, filters], () =>
    getTrainings(filters)
  );

  return query;
};
