import axios from 'axios';

const getToken = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    return JSON.parse(auth).token;
  }
  return null;
};

export const axiosJWT = axios.create({
  baseURL: process.env.REACT_APP_BASE_SERVER_URL,
});

axiosJWT.interceptors.request.use(function (config) {
  config.headers['x-access-token'] = getToken();
  return config;
});
