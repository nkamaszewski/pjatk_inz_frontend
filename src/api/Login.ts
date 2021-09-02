import axios from 'axios';

export const postLogin = (login: { email: string; password: string }) =>
  axios.post('http://localhost:3000/login/', login);
