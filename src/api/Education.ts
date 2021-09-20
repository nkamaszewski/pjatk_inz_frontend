import { axiosJWT } from 'helpers/tokenAxios';
import { EducationDTO } from '../types/DTO/Education';

export const postEducation = (education: {
  Price: number;
  PriceAccommodation: number;
  PriceTransit: number;
}) => axiosJWT.post('/education/', education);

export const updateEducation = (education: EducationDTO) =>
  axiosJWT.put(`/education/${education.IdEducation}`, education);
