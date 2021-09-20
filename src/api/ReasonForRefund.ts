import { axiosJWT } from 'helpers/tokenAxios';

export const getReasonsForRefund = () => axiosJWT.get('/reasforrefund');
