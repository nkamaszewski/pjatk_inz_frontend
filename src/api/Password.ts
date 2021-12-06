import axios from 'axios';
import { axiosJWT } from 'helpers/tokenAxios';

export const postRestore = (email: string) =>
  axios.post('http://localhost:3000/api/password/restore', { email });

export const postChangePassword = ({
  email,
  password,
  token,
}: {
  email: string | null;
  password: string;
  token: string;
}) =>
  axios.post(
    'http://localhost:3000/api/password/change',
    { email, password },
    { headers: { 'x-access-token': token } }
  );

export const getChangePasswordToken = () =>
  axiosJWT.get<{ token: string }>('/password/token');
