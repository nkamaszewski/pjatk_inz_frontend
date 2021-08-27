import axios from 'axios';
import { ALL } from '../contexts/FilterContext';
import { ApplicationForDTO } from '../types/DTO/ApplicationFor';

interface QueryParams {
  iddepartment: string | null;
  iddivision: string | null;
  idstatus: string | null;
}

export const getApplicationsFor = (
  params: QueryParams = { iddepartment: null, iddivision: null, idstatus: null }
) => {
  let query = params;
  if (params.idstatus === ALL) query = { ...params, idstatus: null };
  return axios.get(`http://localhost:3000/api/appfor`, { params: query });
};

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
