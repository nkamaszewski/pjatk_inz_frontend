import { axiosJWT } from 'helpers/tokenAxios';

export const getApplicationsForReason = () => axiosJWT.get('/appforreasons');

export const deleteApplicationsForReason = (id: string) =>
  axiosJWT.delete(`/appforreasons/${id}`);
