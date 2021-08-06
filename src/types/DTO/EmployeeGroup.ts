import { EmployeeDTO } from './Employee';
import { GroupDTO } from './Group';

export interface EmployeeGroupDTO {
  IdEmployeeGroup: string;
  IdPerson: string;
  IdGroup: string;
  employeeGroupEmployee: EmployeeDTO;
  employeeGroupGroup: GroupDTO;
}
