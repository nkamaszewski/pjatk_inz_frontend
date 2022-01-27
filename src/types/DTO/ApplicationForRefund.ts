import { ApplicationForReasonsList } from './ApplicationForReasons';
import { EducationDTO } from './Education';

export interface ApplicationForRefundDTO {
  IdApplicationForRefund: string;
  IdApplicationFor: string;
  IdStatus: string;
}

export interface ApplicationForRefundEditModel {
  DateOfSubmission: string;
  IdReasonForRefund: string;
  IdApplicationFor: string;
  IdStatus: string;
  IdApplicationForRefund: string;
}

export interface ApplicationForRefundList extends ApplicationForRefundDTO {
  DateOfSubmission: string;
  applicationForRefundApplicationForReasons: ApplicationForReasonsList[];
  applicationForRefundApplicationFor: {
    IdEducation: string;
    applicationForEducation: EducationDTO;
    applicationForEmployee: {
      IdPerson: string;
      employeePerson: { FirstName: string; LastName: string };
    };
  };
}
