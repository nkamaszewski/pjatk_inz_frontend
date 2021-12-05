import { axiosJWT } from 'helpers/tokenAxios';

export const postInviteUser = (email: string) =>
  axiosJWT.post('http://localhost:3000/api/inviteUser', { email });
