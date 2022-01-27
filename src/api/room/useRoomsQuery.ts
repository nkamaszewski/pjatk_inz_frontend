import { useSyncLoader } from 'hooks/useSyncLoader';
import { useQuery } from 'react-query';
import { getRooms } from './Room';

export const ROOMS_QUERY_KEY = ['rooms'];

export const useRoomsQuery = () => {
  const query = useQuery(ROOMS_QUERY_KEY, () => getRooms());

  useSyncLoader({ text: 'Trwa ładowanie danych', isLoading: query.isLoading });

  return query;
};
