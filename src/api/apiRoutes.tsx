import axios from 'axios';

export const getDivisions = () =>
  axios.get('http://localhost:3000/api/divisions/');

export const getDepartments = () =>
  axios.get('http://localhost:3000/api/departments/');

export const getEmployments = () =>
  axios.get('http://localhost:3000/api/employments/');
