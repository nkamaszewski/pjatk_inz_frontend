import axios from 'axios';

export const getDepartments = () =>
  axios.get('http://localhost:3000/api/departments/');

export const postDepartment = (department: {
  Name: string;
  IdDivision: string;
}) => axios.post('http://localhost:3000/api/departments/', department);
