import axios from 'axios';

export const getPositions = () =>
  axios.get('http://localhost:3000/api/positions/');

export const postPosition = (position: { Name: string }) =>
  axios.post('http://localhost:3000/api/positions/', position);
