import { axiosJWT } from 'helpers/tokenAxios';
import { ApplicationForRefundList } from 'types/DTO/ApplicationForRefund';

export const getApplicationsForRefund = () =>
  axiosJWT.get<ApplicationForRefundList[]>('/appforrefund');

export const getApplicationForRefund = (id: string) =>
  axiosJWT.get(`/appforrefund/${id}`);

export const deleteApplicationsForRefund = (id: string) =>
  axiosJWT.delete(`/appforrefund/${id}`);
