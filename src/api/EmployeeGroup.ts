import axios from 'axios';

export const getEmployeeGroup = () =>
  axios.get('http://localhost:3000/api/employeegroups/');

export const postEmployeeGroup = (employeeGroup: {
  IdPerson: string;
  IdGroup: string;
}) => axios.post('http://localhost:3000/api/employeegroups/', employeeGroup);

export const deleteEmployeeGroup = (id: string) =>
  axios.delete(`http://localhost:3000/api/employeegroups/${id}`);
