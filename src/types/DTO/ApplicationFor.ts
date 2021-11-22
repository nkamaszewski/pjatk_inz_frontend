export interface ApplicationForDTO {
  IdApplicationFor: string;
  DateOfSubmission: Date;
  IdEducation: string;
  IdStatus: string;
  Compatibility: boolean;
  IdPerson: string;
  IsStudy: boolean;
}

export interface ApplicationForListDTO {
  IdApplicationFor: string;
  DateOfSubmission: Date;
  IdEducation: string;
  IdStatus: string;
  Compatibility: boolean;
  Status: string;
}
