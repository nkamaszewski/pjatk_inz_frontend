import { axiosJWT } from 'helpers/tokenAxios';
import { CompanyDTO } from '../types/DTO/Company';

export const getCompanies = () => axiosJWT.get('/companies/');

export const getOwner = () => axiosJWT.get('/companies/owner');

export const postCompany = (company: Omit<CompanyDTO, 'IdCompany'>) =>
  axiosJWT.post('/companies/', company);

export const updateCompany = (company: CompanyDTO) =>
  axiosJWT.put(`/companies/${company.IdCompany}`, company);

export const deleteCompany = (id: string) =>
  axiosJWT.delete(`/companies/${id}`);
