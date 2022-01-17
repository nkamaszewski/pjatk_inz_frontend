import { DepartmentDTO } from './Department';

export interface DivisionDTO {
  IdDivision: string;
  Name: string;
  divisionDepartments: DepartmentDTO[];
}
