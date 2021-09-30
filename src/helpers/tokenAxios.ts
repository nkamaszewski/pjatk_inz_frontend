import axios from 'axios';

const getToken = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    return JSON.parse(auth).token;
  }
  return null;
};

export const axiosJWT = axios.create({
  baseURL: 'http://localhost:3000/api',
});

axiosJWT.interceptors.request.use(function (config) {
  config.headers['x-access-token'] = getToken();
  return config;
});
