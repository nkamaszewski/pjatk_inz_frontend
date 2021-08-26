import axios from 'axios';
import { EducationDTO } from '../types/DTO/Education';

export const postEducation = (education: {
  Price: number;
  PriceAccommodation: number;
  PriceTransit: number;
}) => axios.post('http://localhost:3000/api/education/', education);

export const updateEducation = (education: EducationDTO) =>
  axios.put(
    `http://localhost:3000/api/education/${education.IdEducation}`,
    education
  );
