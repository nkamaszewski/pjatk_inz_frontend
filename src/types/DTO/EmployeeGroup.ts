import { EmployeeDTO } from './Employee';
import { GroupListDTO } from './Group';

export interface EmployeeGroupDTO {
  IdEmployeeGroup: string;
  employeeGroupEmployee: EmployeeDTO;
  employeeGroupGroup: GroupListDTO;
}
