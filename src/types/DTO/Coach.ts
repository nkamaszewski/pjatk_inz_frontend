import { PersonDTO } from './Person';

export interface CoachDTO {
  IdPerson: string;
  JobTitle: string;
  coachPerson: PersonDTO;
}

export interface CoachListDTO {
  IdPerson: string;
  FirstName: string;
  LastName: string;
  JobTitle: string;
}
