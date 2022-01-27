import { axiosJWT } from 'helpers/tokenAxios';

export const getApplicationsForReason = () => axiosJWT.get('/appforreasons');

export const deleteApplicationsForReason = (id: string) =>
  axiosJWT.delete(`/appforreasons/${id}`);

export const updateApplicationsForReason = (application: {
  IdApplicationForReasons: string;
  DateOfSubmission: string;
  IdApplicationForRefund: string;
  IdStatus: string;
}) =>
  axiosJWT.put(
    `/appforreasons/${application.IdApplicationForReasons}`,
    application
  );
