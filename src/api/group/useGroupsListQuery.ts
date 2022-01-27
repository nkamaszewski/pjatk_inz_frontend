import { useSyncLoader } from 'hooks/useSyncLoader';
import { useFilter } from 'providers/FilterContext';
import { useQuery } from 'react-query';
import { getGroups } from './Group';

export const GROUPS_LIST_QUERY_KEY = ['groups'];

export const useGroupsListQuery = () => {
  const {
    group: { filters },
  } = useFilter();

  const query = useQuery([...GROUPS_LIST_QUERY_KEY, filters], () =>
    getGroups(filters)
  );

  useSyncLoader({ text: 'Trwa ładowanie danych', isLoading: query.isLoading });

  return query;
};
