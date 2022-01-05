import { axiosJWT } from 'helpers/tokenAxios';
import { UniversitetDTO } from 'types/DTO/Universitet';

export const getUniversitets = () =>
  axiosJWT.get<UniversitetDTO[]>('/universities/');

export const postUniversitet = (universitet: {
  Name: string;
  ShortName: string;
  City: string;
  PostalCode: string;
  Street: string;
  Number: number;
}) => axiosJWT.post('/universities/', universitet);
