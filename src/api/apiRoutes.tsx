import axios from 'axios';

export const getDivisions = () =>
  axios.get('http://localhost:3000/api/divisions/');

export const postDivision = (division: { Name: string }) =>
  axios.post('http://localhost:3000/api/divisions/', division);

export const getDepartments = () =>
  axios.get('http://localhost:3000/api/departments/');

export const postDepartment = (department: {
  Name: string;
  IdDivision: string;
}) => axios.post('http://localhost:3000/api/departments/', department);

export const getPositions = () =>
  axios.get('http://localhost:3000/api/positions/');

export const postPosition = (position: { Name: string }) =>
  axios.post('http://localhost:3000/api/positions/', position);

export const getEmployments = () =>
  axios.get('http://localhost:3000/api/employments/');
