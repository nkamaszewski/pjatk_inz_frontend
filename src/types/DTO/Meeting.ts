import { GroupDTO } from './Group';
import { RoomDTO } from './Room';

export interface MeetingDTO {
  IdMeeting: string;
  From: string;
  To: string;
  meetingGroup: GroupDTO;
  meetingRoom: RoomDTO;
  Topic: string;
}

export interface MeetingDTOShort {
  IdMeeting: string;
  From: string;
  To: string;
  IdGroup: string;
  IdRoom: string;
}

export const mapMeetingToShort = ({
  IdMeeting,
  From,
  To,
  meetingGroup,
  meetingRoom,
}: MeetingDTO): MeetingDTOShort => ({
  IdMeeting,
  From,
  To,
  IdGroup: meetingGroup.IdGroup,
  IdRoom: meetingRoom.IdRoom,
});
