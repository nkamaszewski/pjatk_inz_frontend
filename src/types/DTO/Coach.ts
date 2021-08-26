import { PersonDTO } from './Person';

export interface CoachDTO {
  IdPerson: string;
  JobTitle: string;
  CoachPerson: PersonDTO;
}

export interface CoachListDTO {
  IdPerson: string;
  FirstName: string;
  LastName: string;
  JobTitle: string;
}
