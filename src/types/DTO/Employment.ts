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
  employmentsDepartment: {
    IdDepartment: string;
    IdDivision: string;
    Name: string;
  };
  emplymentPosition: PositionDTO;
}

export const mapEmploymentListDTOtoEmploymentDTO = ({
  IdEmployment,
  IdPerson,
  DateFrom,
  DateTo,
  employmentsDepartment: { IdDepartment },
  emplymentPosition: { IdPosition },
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
