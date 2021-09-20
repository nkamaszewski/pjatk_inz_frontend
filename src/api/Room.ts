import { axiosJWT } from 'helpers/tokenAxios';
import { RoomDTO } from '../types/DTO/Room';

export const getRooms = () => axiosJWT.get('/rooms/');

export const postRoom = (room: Omit<RoomDTO, 'IdRoom'>) =>
  axiosJWT.post('/rooms/', room);

export const deleteRoom = (id: string) => axiosJWT.delete(`/rooms/${id}`);

export const updateRoom = (room: RoomDTO) =>
  axiosJWT.put(`/rooms/${room.IdRoom}`, room);
