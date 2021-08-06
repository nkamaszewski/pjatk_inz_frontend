import axios from 'axios';
import { EmployeeDTO } from '../types/DTO/Employee';

export const getEmployees = () =>
  axios.get(`http://localhost:3000/api/employees/`);

export const getEmployee = (id: string) =>
  axios.get(`http://localhost:3000/api/employees/${id}`);

export const postEmployee = (employee: {
  IdPerson: string;
  Pesel: number;
  Password: string;
}) => axios.post('http://localhost:3000/api/employees/', employee);
