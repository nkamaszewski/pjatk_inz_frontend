import { axiosJWT } from 'helpers/tokenAxios';
import {
  ParticipationDTO,
  ParticipationsListDTO,
} from 'types/DTO/Participation';

export const getParticipations = () => axiosJWT.get('/participations/');
export const getParticipationsByIdEducation = (idEducation: string) =>
  axiosJWT.get<ParticipationsListDTO[]>(
    `/participations/education/${idEducation}`
  );

export const postParticipation = (
  participation: Omit<ParticipationDTO, 'IdParticipation'>
) => axiosJWT.post<ParticipationDTO>('/participations/', participation);

export const deleteParticipation = ({ id }: { id: string }) =>
  axiosJWT.delete(`/participations/${id}`);
