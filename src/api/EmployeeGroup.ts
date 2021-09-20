import { axiosJWT } from 'helpers/tokenAxios';

export const getEmployeeGroup = () => axiosJWT.get('/employeegroups/');

export const postEmployeeGroup = (employeeGroup: {
  IdPerson: string;
  IdGroup: string;
}) => axiosJWT.post('/employeegroups/', employeeGroup);

export const deleteEmployeeGroup = (id: string) =>
  axiosJWT.delete(`/employeegroups/${id}`);
