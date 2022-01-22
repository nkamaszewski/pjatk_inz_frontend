import { useFilter } from 'providers/FilterContext';
import { useQuery } from 'react-query';
import { getApplicationsFor } from './Application';
import { APPLICATION_QUERY_KEY } from './useApplicationsQuery';

export const useApplicationsListQuery = () => {
  const {
    workshop: { filters },
  } = useFilter();
  const query = useQuery([...APPLICATION_QUERY_KEY, filters], () =>
    getApplicationsFor(filters)
  );

  return query;
};
