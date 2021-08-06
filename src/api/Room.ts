import axios from 'axios';

export const getRooms = () => axios.get('http://localhost:3000/api/rooms/');

export const postRoom = (room: {
  Name: string;
  Area: number;
  CapacitySet1: number;
  CapacitySet2: number;
  CapacitySet3: number;
  CapacitySet4: number;
}) => axios.post('http://localhost:3000/api/rooms/', room);
