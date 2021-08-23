import { DivisionDTO } from './Division';

export interface DepartmentDTO {
  IdDepartment: string;
  IdDivision: string;
  Name: string;
}
export interface DepartmentListDTO extends DepartmentDTO {
  departmentsDivision: DivisionDTO;
}
