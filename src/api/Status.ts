import { axiosJWT } from 'helpers/tokenAxios';

export const getStatuses = () => axiosJWT.get('/status/');
