import { axiosJWT } from 'helpers/tokenAxios';
import { DepartmentDTO } from '../types/DTO/Department';

export const getDepartments = () => axiosJWT.get('/departments/');

export const postDepartment = (
  department: Omit<DepartmentDTO, 'IdDepartment'>
) => axiosJWT.post('/departments/', department);

export const deleteDepartment = (id: string) =>
  axiosJWT.delete(`/departments/${id}`);

export const updateDepartment = (department: DepartmentDTO) =>
  axiosJWT.put(`/departments/${department.IdDepartment}`, department);
