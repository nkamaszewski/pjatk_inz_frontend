import { axiosJWT } from 'helpers/tokenAxios';
import { DivisionDTO } from '../types/DTO/Division';

export const getDivisions = () => axiosJWT.get<DivisionDTO[]>('/divisions/');

export const postDivision = (division: Omit<DivisionDTO, 'IdDivision'>) =>
  axiosJWT.post('/divisions/', division);

export const deleteDivision = (id: string) =>
  axiosJWT.delete(`/divisions/${id}`);

export const updateDivision = (division: DivisionDTO) =>
  axiosJWT.put(`/divisions/${division.IdDivision}`, division);
