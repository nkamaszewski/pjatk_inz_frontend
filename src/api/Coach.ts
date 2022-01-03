import { axiosJWT } from 'helpers/tokenAxios';
import { CoachDTO } from '../types/DTO/Coach';

export const getCoaches = () => axiosJWT.get<CoachDTO[]>('/coaches/');

export const postCoach = (coach: Omit<CoachDTO, 'CoachPerson'>) =>
  axiosJWT.post<CoachDTO>('/coaches/', coach);

export const deleteCoach = (id: string) => axiosJWT.delete(`/coaches/${id}`);

export const updateCoach = (coach: Omit<CoachDTO, 'CoachPerson'>) =>
  axiosJWT.put(`/coaches/${coach.IdPerson}`, coach);
