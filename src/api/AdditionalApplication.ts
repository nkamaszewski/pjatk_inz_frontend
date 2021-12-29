import { axiosJWT } from 'helpers/tokenAxios';

export const postAdditionalApplication = (application: {
  Id: string;
  Name: string;
  DateOfSubmission: string;
}) => axiosJWT.post('/additionalapplication/', application);
