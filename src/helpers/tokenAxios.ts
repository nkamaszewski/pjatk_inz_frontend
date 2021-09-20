import axios from 'axios';

const getToken = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    console.log(JSON.parse(auth).token);

    return JSON.parse(auth).token;
  }
  return null;
};

export const axiosJWT = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'x-access-token': getToken() },
});
