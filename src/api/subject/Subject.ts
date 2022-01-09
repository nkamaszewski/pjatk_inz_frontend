import { axiosJWT } from 'helpers/tokenAxios';
import { SubjectDTO } from 'types/DTO/Subject';

export const getSubjects = () => axiosJWT.get<SubjectDTO[]>('/subjects');

export const postSubject = (subject: { Subject: string }) =>
  axiosJWT.post<SubjectDTO>('/subjects/', subject);
