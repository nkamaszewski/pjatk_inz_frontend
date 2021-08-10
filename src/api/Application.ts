import axios from 'axios';
import { ApplicationForDTO } from '../types/DTO/ApplicationFor';

export const getApplicationsFor = () =>
  axios.get('http://localhost:3000/api/appfor');

export const postApplicationsFor = (
  application: Omit<ApplicationForDTO, 'IdApplicationFor'>
) => axios.post('http://localhost:3000/api/appfor/', application);

export const updateApplicationsFor = (application: ApplicationForDTO) =>
  axios.put(
    `http://localhost:3000/api/appfor/${application.IdApplicationFor}`,
    application
  );

export const deleteApplicationsFor = (id: string) =>
  axios.delete(`http://localhost:3000/api/appfor/${id}`);
