import { Division } from './Division';

export interface Department {
  IdDepartment: string;
  IdDivision: string;
  Name: string;
  departmentsDivision: Division;
}
