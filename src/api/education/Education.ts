import { axiosJWT } from 'helpers/tokenAxios';
import { EducationDTO } from '../../types/DTO/Education';

export const postEducation = (education: Omit<EducationDTO, 'IdEducation'>) =>
  axiosJWT.post<EducationDTO>('/education/', education);

export const updateEducation = (education: EducationDTO) =>
  axiosJWT.put<EducationDTO>(`/education/${education.IdEducation}`, education);
