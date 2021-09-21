import axios from 'axios';

export const postRestore = (email: string) =>
  axios.post('http://localhost:3000/password/restore', { email });
