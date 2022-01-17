import { axiosJWT } from 'helpers/tokenAxios';
import { DepartmentDTO, DepartmentListDTO } from '../../types/DTO/Department';

export const getDepartments = () =>
  axiosJWT.get<DepartmentListDTO[]>('/departments/');

export const postDepartment = (
  department: Omit<DepartmentDTO, 'IdDepartment'>
) => axiosJWT.post('/departments/', department);

export const deleteDepartment = ({ id }: { id: string }) =>
  axiosJWT.delete(`/departments/${id}`);

export const updateDepartment = (department: DepartmentDTO) =>
  axiosJWT.put(`/departments/${department.IdDepartment}`, department);
