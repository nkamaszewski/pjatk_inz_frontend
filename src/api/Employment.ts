import axios from 'axios';

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
