import axios from 'axios';
import { DivisionDTO } from '../types/DTO/Division';

export const getDivisions = () =>
  axios.get('http://localhost:3000/api/divisions/');

export const postDivision = (division: Omit<DivisionDTO, 'IdDivision'>) =>
  axios.post('http://localhost:3000/api/divisions/', division);

export const deleteDivision = (id: string) =>
  axios.delete(`http://localhost:3000/api/divisions/${id}`);

export const updateDivision = (division: DivisionDTO) =>
  axios.put(
    `http://localhost:3000/api/divisions/${division.IdDivision}`,
    division
  );
