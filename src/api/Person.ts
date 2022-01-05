import { axiosJWT } from 'helpers/tokenAxios';
import { PersonDTO } from 'types/DTO/Person';

export const getPersons = () => axiosJWT.get<PersonDTO[]>('/persons/');
export const getPerson = (id: string) => axiosJWT.get(`/persons/${id}`);

export const postPerson = (person: {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: number;
}) => axiosJWT.post('/persons/', person);
