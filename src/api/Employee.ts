import { axiosJWT } from 'helpers/tokenAxios';

export const getEmployees = () => axiosJWT.get(`/employees/`);

export const getEmployee = (id: string) => axiosJWT.get(`/employees/${id}`);

export const postEmployee = (employee: {
  IdPerson: string;
  Pesel: number;
  Password: string;
}) => axiosJWT.post('/employees/', employee);
