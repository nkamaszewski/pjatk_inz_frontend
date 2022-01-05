import { getRooms } from 'api/Room';
import { useQuery } from 'react-query';
import { RoomDTO } from 'types/DTO/Room';

const DEFAULT_ROOMS = [{ IdRoom: 'all', Name: 'Wszystkie' } as RoomDTO];

export const useRoomsQuery = (withAll: boolean) => {
  const initialData = withAll ? DEFAULT_ROOMS : [];

  const query = useQuery(
    ['rooms', 'control_ui'],
    async () => {
      const res = await getRooms();
      return withAll ? DEFAULT_ROOMS.concat(res.data) : res.data;
    },
    { initialData }
  );

  return query;
};
