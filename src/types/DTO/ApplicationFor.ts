export interface ApplicationForDTO {
  IdApplicationFor: string;
  DateOfSubmission: string;
  IdEducation: string;
  IdStatus: string;
  Compatibility: boolean;
  IdPerson: string;
  EducationType: 'study' | 'training' | 'other';
}

export interface ApplicationForListDTO {
  IdApplicationFor: string;
  DateOfSubmission: string;
  IdEducation: string;
  IdStatus: string;
  Compatibility: boolean;
  Status: string;
  FirstName: string;
  LastName: string;
  Nazwa: string;
}
