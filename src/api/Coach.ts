import axios from 'axios';
import { CoachDTO } from '../types/DTO/Coach';

export const getCoaches = () => axios.get('http://localhost:3000/api/coaches/');

export const postCoach = (coach: Omit<CoachDTO, 'CoachPerson'>) =>
  axios.post('http://localhost:3000/api/coaches/', coach);

export const deleteCoach = (id: string) =>
  axios.delete(`http://localhost:3000/api/coaches/${id}`);

export const updateCoach = (coach: Omit<CoachDTO, 'CoachPerson'>) =>
  axios.put(`http://localhost:3000/api/coaches/${coach.IdPerson}`, coach);
