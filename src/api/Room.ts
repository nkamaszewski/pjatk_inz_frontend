import axios from 'axios';
import { RoomDTO } from '../types/DTO/Room';

export const getRooms = () => axios.get('http://localhost:3000/api/rooms/');

export const postRoom = (room: Omit<RoomDTO, 'IdRoom'>) =>
  axios.post('http://localhost:3000/api/rooms/', room);

export const deleteRoom = (id: string) =>
  axios.delete(`http://localhost:3000/api/rooms/${id}`);

export const updateRoom = (room: RoomDTO) =>
  axios.put(`http://localhost:3000/api/rooms/${room.IdRoom}`, room);
