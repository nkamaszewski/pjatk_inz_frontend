import { GroupDTO } from './Group';
import { RoomDTO } from './Room';

export interface MeetingDTO {
  IdMeeting: string;
  From: string;
  To: string;
  meetingGroup: GroupDTO;
  meetingRoom: RoomDTO;
}

export interface MeetingDTOShort {
  IdMeeting: string;
  From: string;
  To: string;
  IdGroup: string;
  IdRoom: string;
}
