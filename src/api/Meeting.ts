import { axiosJWT } from 'helpers/tokenAxios';
import { MeetingDTO, MeetingDTOShort } from 'types/DTO/Meeting';

export const getMeetings = () => axiosJWT.get('/meetings/');

export const postMeeting = (meeting: {
  From: string | null;
  To: string | null;
  IdGroup: string;
  IdRoom: string;
}) => axiosJWT.post('/meetings/', meeting);

export const deleteMeeting = (id: string) => axiosJWT.delete(`/meetings/${id}`);

export const updateMeeting = (meeting: MeetingDTOShort) =>
  axiosJWT.put(`/meetings/${meeting.IdMeeting}`, meeting);
