import axios from 'axios';

export const getMeetings = () =>
  axios.get('http://localhost:3000/api/meetings/');

export const postMeeting = (meeting: {
  From: Date;
  To: Date;
  IdGroup: string;
  IdRoom: string;
}) => axios.post('http://localhost:3000/api/meetings/', meeting);
