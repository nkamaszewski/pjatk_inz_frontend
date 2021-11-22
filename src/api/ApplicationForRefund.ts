import { axiosJWT } from 'helpers/tokenAxios';

export const getApplicationsForRefund = () => axiosJWT.get('/appforrefund');

export const getApplicationForRefund = (id: string) =>
  axiosJWT.get(`/appforrefund/${id}`);

export const deleteApplicationsForRefund = (id: string) =>
  axiosJWT.delete(`/appforrefund/${id}`);
