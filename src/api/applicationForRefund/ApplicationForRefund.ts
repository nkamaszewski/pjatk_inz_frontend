import { axiosJWT } from 'helpers/tokenAxios';
import {
  ApplicationForRefundEditModel,
  ApplicationForRefundList,
} from 'types/DTO/ApplicationForRefund';

export const getApplicationsForRefund = () =>
  axiosJWT.get<ApplicationForRefundList[]>('/appforrefund');

export const getApplicationForRefund = (id: string) =>
  axiosJWT.get(`/appforrefund/${id}`);

export const deleteApplicationsForRefund = (id: string) =>
  axiosJWT.delete(`/appforrefund/${id}`);

export const updateApplicationsForRefund = (
  app: Omit<ApplicationForRefundEditModel, 'IdReasonForRefund'>
) => axiosJWT.put(`/appforrefund/${app.IdApplicationForRefund}`, app);
