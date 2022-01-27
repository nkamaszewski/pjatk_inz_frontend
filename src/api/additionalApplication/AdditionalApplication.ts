import { axiosJWT } from 'helpers/tokenAxios';

export const postAdditionalApplication = (application: {
  IdApplicationFor: string;
  IdReasonForRefund: string;
  DateOfSubmission: string;
  IdStatus: string;
}) => axiosJWT.post('/additionalapplication/', application);
