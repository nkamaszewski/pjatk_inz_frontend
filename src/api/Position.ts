import { axiosJWT } from 'helpers/tokenAxios';

export const getPositions = () => axiosJWT.get('/positions/');

export const postPosition = (position: { Name: string }) =>
  axiosJWT.post('/positions/', position);

export const deletePosition = (id: string) =>
  axiosJWT.delete(`/positions/${id}`);

export const updatePosition = (position: {
  Name: string;
  IdPosition: string;
}) => axiosJWT.put(`/positions/${position.IdPosition}`, position);
