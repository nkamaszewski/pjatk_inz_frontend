import axios from 'axios';
import { CoachDTO } from '../types/DTO/Coach';

export const getCoaches = () => axios.get('http://localhost:3000/api/coaches/');

export const postCoach = (coach: CoachDTO) =>
  axios.post('http://localhost:3000/api/coaches/', coach);
