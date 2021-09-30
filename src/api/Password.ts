import axios from 'axios';

export const postRestore = (email: string) =>
  axios.post('http://localhost:3000/password/restore', { email });

export const postChangePassword = (
  email: string,
  password: string,
  token: string
) =>
  axios.post(
    'http://localhost:3000/password/change',
    { email, password },
    { headers: { 'x-access-token': token } }
  );