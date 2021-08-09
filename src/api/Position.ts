import axios from 'axios';

export const getPositions = () =>
  axios.get('http://localhost:3000/api/positions/');

export const postPosition = (position: { Name: string }) =>
  axios.post('http://localhost:3000/api/positions/', position);

export const deletePosition = (id: string) =>
  axios.delete(`http://localhost:3000/api/positions/${id}`);

export const updatePosition = (position: {
  Name: string;
  IdPosition: string;
}) =>
  axios.put(
    `http://localhost:3000/api/positions/${position.IdPosition}`,
    position
  );
