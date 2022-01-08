import { EmployeeDTO } from './Employee';

export interface PersonDTO {
  IdPerson: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  personEmployee: null | EmployeeDTO;
}
