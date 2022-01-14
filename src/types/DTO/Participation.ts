import { EmployeeDTO } from './Employee';

export interface ParticipationDTO {
  IdParticipation: string;
  DateOfRegistration: string;
  EndDate: string;
  CertificateOfCompletion: string;
  IdPerson: string;
  IdEducation: string;
}

export interface ParticipationsListDTO {
  IdParticipation: string;
  DateOfRegistration: string;
  EndDate: string;
  CertificateOfCompletion: string;
  IdPerson: string;
  IdEducation: string;
  participationEmployee: EmployeeDTO;
}

export interface ParticipationsWithoutQuestionnaireDTO {
  IdParticipation: string;
  IdEducation: string;
  IdPerson: string;
  IdQuestionnaire: string | null;
  Name: string;
}
