import { axiosJWT } from 'helpers/tokenAxios';
import { ALL } from 'providers/FilterContext';
import { MeetingDTO, MeetingDTOShort } from 'types/DTO/Meeting';

interface QueryParams {
  idGroup: string | null;
  idRoom: string | null;
}

export const getMeetings = (params: QueryParams) => {
  let query = { ...params };
  if (params.idGroup === ALL) query.idGroup = null;
  if (params.idRoom === ALL) query.idRoom = null;

  return axiosJWT.get<MeetingDTO[]>('/meetings/', { params: query });
};

export const postMeeting = (meeting: {
  From: string | null;
  To: string | null;
  IdGroup: string;
  IdRoom: string;
}) => axiosJWT.post('/meetings/', meeting);

export const deleteMeeting = (id: string) => axiosJWT.delete(`/meetings/${id}`);

export const updateMeeting = (meeting: MeetingDTOShort) =>
  axiosJWT.put(`/meetings/${meeting.IdMeeting}`, meeting);
