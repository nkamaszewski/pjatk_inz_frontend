import { axiosJWT } from 'helpers/tokenAxios';
import { ALL } from '../providers/FilterContext';
import { ApplicationForDTO } from '../types/DTO/ApplicationFor';

interface QueryParams {
  iddepartment: string | null;
  iddivision: string | null;
  idstatus: string | null;
}

export const getApplicationsFor = (
  params: QueryParams = { iddepartment: null, iddivision: null, idstatus: null }
) => {
  let query = { ...params };
  if (params.idstatus === ALL) query.idstatus = null;
  if (params.iddivision === ALL) query.iddivision = null;
  if (params.iddepartment === ALL) query.iddepartment = null;
  return axiosJWT.get(`/appfor`, { params: query });
};

export const getApplicationFor = (id: string) =>
  axiosJWT.get<ApplicationForDTO>(`/appfor/${id}`);

export const postApplicationsFor = (
  application: Omit<ApplicationForDTO, 'IdApplicationFor' | 'IsStudy'>
) => axiosJWT.post('/appfor/', application);

export const updateApplicationsFor = (
  application: Omit<ApplicationForDTO, 'IsStudy'>
) => axiosJWT.put(`/appfor/${application.IdApplicationFor}`, application);

export const deleteApplicationsFor = (id: string) =>
  axiosJWT.delete(`/appfor/${id}`);
