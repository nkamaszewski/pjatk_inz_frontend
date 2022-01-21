import { DepartmentDTO } from './Department';
import { DivisionDTO } from './Division';
import { PositionDTO } from './Position';

export interface EmploymentDTO {
  IdEmployment: string;
  DateFrom: Date | string | null;
  DateTo: Date | string | null;
  IdDepartment: string;
  IdDivision: string;
  IdPosition: string;
  IdPerson: string;
  IdRole: string;
}

export interface EmploymentListDTO {
  IdEmployment: string;
  IdPerson: string;
  DateFrom: Date;
  DateTo: Date;
  Department: DepartmentDTO;
  Division: DivisionDTO;
  Position: PositionDTO;
  FirstName: string;
  LastName: string;
  IdRole: string;
  Email: string;
  IsActive: boolean;
}

export const mapEmploymentListDTOtoEmploymentDTO = ({
  IdEmployment,
  IdPerson,
  DateFrom,
  DateTo,
  Department: { IdDepartment },
  Division,
  Position: { IdPosition },
  IdRole,
}: EmploymentListDTO) => {
  const empDTO: EmploymentDTO = {
    IdEmployment,
    DateFrom,
    DateTo,
    IdDivision: Division ? Division.IdDivision : '',
    IdDepartment,
    IdPosition,
    IdPerson,
    IdRole,
  };
  return empDTO;
};
