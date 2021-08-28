import axios from 'axios';
import { CompanyDTO } from '../types/DTO/Company';

export const getCompanies = () =>
  axios.get('http://localhost:3000/api/companies/');

export const getOwner = () =>
  axios.get('http://localhost:3000/api/companies/owner');

export const postCompany = (company: Omit<CompanyDTO, 'IdCompany'>) =>
  axios.post('http://localhost:3000/api/companies/', company);

export const updateCompany = (company: CompanyDTO) =>
  axios.put(
    `http://localhost:3000/api/companies/${company.IdCompany}`,
    company
  );

export const deleteCompany = (id: string) =>
  axios.delete(`http://localhost:3000/api/companies/${id}`);
