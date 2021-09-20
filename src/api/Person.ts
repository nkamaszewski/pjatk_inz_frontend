import { axiosJWT } from 'helpers/tokenAxios';

export const getPersons = () => axiosJWT.get('/persons/');
export const getPerson = (id: string) => axiosJWT.get(`/persons/${id}`);

export const postPerson = (person: {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: number;
}) => axiosJWT.post('/persons/', person);
