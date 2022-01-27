import { getRooms } from 'api/room/Room';
import { useQuery } from 'react-query';
import { RoomDTO } from 'types/DTO/Room';

const DEFAULT_ROOMS = [{ IdRoom: 'all', Name: 'Wszystkie' } as RoomDTO];

export const useRoomsQuery = (withAll: boolean) => {
  const query = useQuery(['rooms', 'control_ui'], async () => {
    const res = await getRooms();
    return withAll ? DEFAULT_ROOMS.concat(res.data) : res.data;
  });

  return query;
};
