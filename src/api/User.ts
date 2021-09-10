import axios from 'axios';
import { PersonDTO } from 'types/DTO/Person';

export const updateUser = (user: PersonDTO) =>
  axios.put(`http://localhost:3000/api/persons/${user.IdPerson}`, user);
