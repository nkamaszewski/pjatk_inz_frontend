import axios from 'axios';

export const getEmployee = (id: string) =>
  axios.get(`http://localhost:3000/api/employees/`, { params: { empId: id } });

export const postEmployee = (employee: { IdPerson: string; Pesel: number }) =>
  axios.post('http://localhost:3000/api/employees/', employee);
