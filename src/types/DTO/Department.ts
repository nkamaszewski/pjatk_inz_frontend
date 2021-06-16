import { DivisionDTO } from './Division';

export interface DepartmentDTO {
  IdDepartment: string;
  IdDivision: string;
  Name: string;
  departmentsDivision: DivisionDTO;
}
