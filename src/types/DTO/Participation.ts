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
