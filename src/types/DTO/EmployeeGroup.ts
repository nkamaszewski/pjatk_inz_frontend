import { EmployeeDTO } from './Employee';
import { GroupDTO } from './Group';

export interface EmployeeGroupDTO {
  IdEmployeeGroup: string;
  employeeGroupEmployee: EmployeeDTO;
  employeeGroupGroup: GroupDTO;
}
