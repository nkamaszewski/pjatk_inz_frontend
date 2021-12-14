import { axiosJWT } from 'helpers/tokenAxios';
import { ParticipationDTO } from 'types/DTO/Participation';

export const getParticipations = () => axiosJWT.get('/participations/');

export const postParticipation = (
  participation: Omit<ParticipationDTO, 'IdParticipation'>
) => axiosJWT.post('/participations/', participation);
