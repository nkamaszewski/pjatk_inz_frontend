import { ParticipationDTO } from './Participation';

export interface QuestionnaireDTO {
  IdQuestionnaire: string;
  IdParticipation: string;
  Date: string;
  Issue1: number;
  Issue2: number;
  Issue3: number;
  Issue4: number;
  Issue5: number;
  questionnairesParticipation: ParticipationDTO;
}
export interface QuestionnaireListDTO {
  IdQuestionnaire: string;
  IdParticipation: string;
  Date: string;
  Issue1: number;
  Issue2: number;
  Issue3: number;
  Issue4: number;
  Issue5: number;
  FistName: string;
  LastName: string;
  Name: string;
}
