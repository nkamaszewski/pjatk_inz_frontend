import { axiosJWT } from 'helpers/tokenAxios';
import { PersonDTO } from 'types/DTO/Person';

export const updateUser = (user: PersonDTO) =>
  axiosJWT.put(`/persons/${user.IdPerson}`, user);
