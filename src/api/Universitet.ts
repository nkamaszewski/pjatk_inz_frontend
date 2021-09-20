import { axiosJWT } from 'helpers/tokenAxios';

export const getUniversitets = () => axiosJWT.get('/universities/');

export const postUniversitet = (universitet: {
  Name: string;
  ShortName: string;
  City: string;
  PostalCode: string;
  Street: string;
  Number: number;
}) => axiosJWT.post('/universities/', universitet);
