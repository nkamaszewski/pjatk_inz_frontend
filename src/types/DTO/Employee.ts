import { PersonDTO } from './Person';

export interface EmployeeDTO {
  IdPerson: string;
  Pesel: number;
  Password: string;
  employeePerson: PersonDTO;
  IsActive?: null | boolean;
  IdRole: string;
}
