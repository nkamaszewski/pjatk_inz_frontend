import axios from 'axios';

export const getCompanies = () =>
  axios.get('http://localhost:3000/api/companies/');

export const postCompany = (company: {
  Name: string;
  City: string;
  PostalCode: string;
  Street: string;
  Number: string;
  TIN: string;
}) => axios.post('http://localhost:3000/api/companies/', company);
