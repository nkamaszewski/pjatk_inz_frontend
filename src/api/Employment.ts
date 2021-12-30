import { axiosJWT } from 'helpers/tokenAxios';
import { EmploymentDTO, EmploymentListDTO } from '../types/DTO/Employment';

export const getEmployments = () =>
  axiosJWT.get<EmploymentListDTO[]>('/employments/');

export const getEmployment = (id: string) => axiosJWT.get(`/employments/${id}`);

export const postEmployment = (
  employment: Omit<EmploymentDTO, 'IdEmployment'>
) => axiosJWT.post('/employments/', employment);

export const deleteEmployment = (id: string) =>
  axiosJWT.delete(`/employments/${id}`);

export const updateEmployment = (employment: EmploymentDTO) =>
  axiosJWT.put(`/employments/${employment.IdEmployment}`, employment);
