import { axiosJWT } from 'helpers/tokenAxios';
import { DivisionDTO } from '../../types/DTO/Division';

export const getDivisions = () => axiosJWT.get<DivisionDTO[]>('/divisions/');

export const postDivision = (
  division: Omit<DivisionDTO, 'IdDivision' | 'divisionDepartments'>
) => axiosJWT.post('/divisions/', division);

export const deleteDivision = ({ id }: { id: string }) =>
  axiosJWT.delete(`/divisions/${id}`);

export const updateDivision = (
  division: Omit<DivisionDTO, 'divisionDepartments'>
) => axiosJWT.put(`/divisions/${division.IdDivision}`, division);
