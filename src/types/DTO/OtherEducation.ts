import { EducationDTO } from './Education';

export interface OtherEducationListDTO {
  IdEducation: string;
  Name: string;
  IdCompany: string;
}

export interface OtherEducationDTO {
  IdEducation: string;
  Name: string;
  IdCompany: string;
  otherEducationEducation: EducationDTO;
}
