import axios from 'axios';

export const getUniversitets = () =>
  axios.get('http://localhost:3000/api/universities/');

export const postUniversitet = (universitet: {
  Name: string;
  ShortName: string;
  City: string;
  PostalCode: string;
  Street: string;
  Number: number;
}) => axios.post('http://localhost:3000/api/universities/', universitet);
