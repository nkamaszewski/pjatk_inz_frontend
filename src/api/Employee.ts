import { axiosJWT } from 'helpers/tokenAxios';
import { EmployeeDTO } from 'types/DTO/Employee';

export const getEmployees = () => axiosJWT.get<EmployeeDTO[]>(`/employees/`);

export const getEmployee = (id: string) => axiosJWT.get(`/employees/${id}`);

export const postEmployee = (employee: {
  IdPerson: string;
  Pesel: number;
  Password: string;
}) => axiosJWT.post('/employees/', employee);
