import { useFilter } from 'providers/FilterContext';
import { useQuery } from 'react-query';
import { getMeetings } from './Meeting';

export const MEETINGS_QUERY_KEY = ['meetings'];

export const useMeetingsListQuery = () => {
  const {
    meeting: { filters },
  } = useFilter();

  const query = useQuery([...MEETINGS_QUERY_KEY, filters], () =>
    getMeetings(filters)
  );

  return query;
};
