import axios from 'axios';
import { EmployeeDTO } from '../types/DTO/Employee';

export const getEmployee = (id: string) =>
  axios.get(`http://localhost:3000/api/employees/`, { params: { empId: id } });

export const postEmployee = (employee: EmployeeDTO) =>
  axios.post('http://localhost:3000/api/employees/', employee);
