import { axiosJWT } from 'helpers/tokenAxios';

export const getApplicationsForRefund = () => axiosJWT.get('/appforrefund');

export const deleteApplicationsForRefund = (id: string) =>
  axiosJWT.delete(`/appforrefund/${id}`);
