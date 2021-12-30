import { DepartmentDTO } from './Department';
import { DivisionDTO } from './Division';
import { PositionDTO } from './Position';

export interface EmploymentDTO {
  IdEmployment: string;
  DateFrom: Date | string | null;
  DateTo: Date | string | null;
  IdDepartment: string;
  IdPosition: string;
  IdPerson: string;
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
}

export const mapEmploymentListDTOtoEmploymentDTO = ({
  IdEmployment,
  IdPerson,
  DateFrom,
  DateTo,
  Department: { IdDepartment },
  Position: { IdPosition },
}: EmploymentListDTO) => {
  const empDTO: EmploymentDTO = {
    IdEmployment,
    DateFrom,
    DateTo,
    IdDepartment,
    IdPosition,
    IdPerson,
  };
  return empDTO;
};
