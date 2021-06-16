import axios from 'axios';

//
// DIVISIONS
//

export const getDivisions = () =>
  axios.get('http://localhost:3000/api/divisions/');

export const postDivision = (division: { Name: string }) =>
  axios.post('http://localhost:3000/api/divisions/', division);

//
// DEPARTMENTS
//

export const getDepartments = () =>
  axios.get('http://localhost:3000/api/departments/');

export const postDepartment = (department: {
  Name: string;
  IdDivision: string;
}) => axios.post('http://localhost:3000/api/departments/', department);

//
// POSITIONS
//

export const getPositions = () =>
  axios.get('http://localhost:3000/api/positions/');

export const postPosition = (position: { Name: string }) =>
  axios.post('http://localhost:3000/api/positions/', position);

//
// EMPLOYMENTS
//

export const getEmployments = () =>
  axios.get('http://localhost:3000/api/employments/');

export const postEmployment = (employment: {
  DateFrom: Date | string;
  DateTo: Date | string;
  IdDepartment: string;
  IdPosition: string;
  IdPerson: string;
}) => axios.post('http://localhost:3000/api/employments/', employment);
