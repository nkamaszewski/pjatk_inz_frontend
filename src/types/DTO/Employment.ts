export interface EmploymentDTO {
  IdEmployment: string;
  DateFrom: Date;
  DateTo: Date;
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
}
