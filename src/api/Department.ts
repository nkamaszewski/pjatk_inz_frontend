import axios from 'axios';
import { DepartmentDTO } from '../types/DTO/Department';

export const getDepartments = () =>
  axios.get('http://localhost:3000/api/departments/');

export const postDepartment = (
  department: Omit<DepartmentDTO, 'IdDepartment'>
) => axios.post('http://localhost:3000/api/departments/', department);

export const deleteDepartment = (id: string) =>
  axios.delete(`http://localhost:3000/api/departments/${id}`);

export const updateDepartment = (department: DepartmentDTO) =>
  axios.put(
    `http://localhost:3000/api/departments/${department.IdDepartment}`,
    department
  );
