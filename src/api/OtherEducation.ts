import { axiosJWT } from 'helpers/tokenAxios';
import { OtherEducationListDTO } from 'types/DTO/OtherEducation';

export const getOtherEducation = () =>
  axiosJWT.get<OtherEducationListDTO[]>('/othereducation/');

export const postOtherEducation = (workshop: OtherEducationListDTO) =>
  axiosJWT.post('/othereducation/', workshop);
