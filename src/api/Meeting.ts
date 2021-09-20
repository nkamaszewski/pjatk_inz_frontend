import { axiosJWT } from 'helpers/tokenAxios';

export const getMeetings = () => axiosJWT.get('/meetings/');

export const postMeeting = (meeting: {
  From: Date;
  To: Date;
  IdGroup: string;
  IdRoom: string;
}) => axiosJWT.post('/meetings/', meeting);
