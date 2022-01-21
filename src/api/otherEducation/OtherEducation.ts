import { axiosJWT } from 'helpers/tokenAxios';
import {
  OtherEducationDTO,
  OtherEducationListDTO,
} from 'types/DTO/OtherEducation';

export const getOtherEducations = () =>
  axiosJWT.get<OtherEducationListDTO[]>('/othereducation/');

export const getOtherEducation = (id: string) =>
  axiosJWT.get<OtherEducationDTO>(`/othereducation/${id}`);

export const postOtherEducation = (workshop: OtherEducationListDTO) =>
  axiosJWT.post('/othereducation/', workshop);

export const updateOtherEducation = (workshop: OtherEducationListDTO) =>
  axiosJWT.put(`/othereducation/${workshop.IdEducation}`, workshop);

export const deleteOtherEducation = (id: string) =>
  axiosJWT.delete(`/othereducation/${id}`);
