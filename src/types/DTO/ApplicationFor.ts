export interface ApplicationForDTO {
  IdApplicationFor: string;
  DateOfSubmission: Date;
  IdEducation: string;
  IdStatus: string;
  Compatibility: boolean;
  IdPerson: string;
}

export interface ApplicationForListDTO {
  IdApplicationFor: string;
  DateOfSubmission: Date;
  IdEducation: string;
  IdStatus: string;
  Compatibility: boolean;
  applicationForStatus: {
    IdStatus: string;
    Name: string;
  };
}
