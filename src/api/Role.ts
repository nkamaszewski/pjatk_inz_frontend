import { axiosJWT } from 'helpers/tokenAxios';
import { RoleDTO } from 'types/DTO/Role';

export const getRoles = () => axiosJWT.get<RoleDTO[]>('/roles/');
