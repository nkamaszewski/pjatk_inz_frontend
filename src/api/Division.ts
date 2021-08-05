import axios from 'axios';

export const getDivisions = () =>
  axios.get('http://localhost:3000/api/divisions/');

export const postDivision = (division: { Name: string }) =>
  axios.post('http://localhost:3000/api/divisions/', division);
