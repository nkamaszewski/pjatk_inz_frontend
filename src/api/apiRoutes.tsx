import axios from 'axios';

export const getDepartments = () =>
  axios.get('http://localhost:3000/api/divisions/');
