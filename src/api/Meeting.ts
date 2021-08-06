import axios from 'axios';

export const getMeetings = () =>
  axios.get('http://localhost:3000/api/meetings/');

export const postMeeting = (meeting: {
  Date: Date;
  HourFrom: number;
  HourTo: number;
  IdGroup: string;
  IdRoom: string;
}) => axios.post('http://localhost:3000/api/meetings/', meeting);
