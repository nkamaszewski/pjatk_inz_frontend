import axios from 'axios';
import { EmploymentDTO } from '../types/DTO/Employment';

export const getEmployments = () =>
  axios.get('http://localhost:3000/api/employments/');

export const postEmployment = (employment: {
  DateFrom: Date | string;
  DateTo: Date | string;
  IdDepartment: string;
  IdPosition: string;
  IdPerson: string;
}) => axios.post('http://localhost:3000/api/employments/', employment);

export const deleteEmployment = (id: string) =>
  axios.delete(`http://localhost:3000/api/employments/${id}`);

export const updateEmployment = (employment: EmploymentDTO) =>
  axios.put(
    `http://localhost:3000/api/employments/${employment.IdEmployment}`,
    employment
  );
