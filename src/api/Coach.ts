import axios from 'axios';

export const getCoaches = () => axios.get('http://localhost:3000/api/coaches/');

export const postCoach = (coach: { IdPerson: string; JobTitle: string }) =>
  axios.post('http://localhost:3000/api/coaches/', coach);
