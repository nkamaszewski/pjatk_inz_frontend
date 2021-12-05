import axios from 'axios';

export const postInviteUser = (email: string) =>
  axios.post('http://localhost:3000/api/inviteUser', { email });
