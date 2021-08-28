import { ApplicationForReasonsList } from './ApplicationForReasons';

export interface ApplicationForRefundDTO {
  IdApplicationForRefund: string;
  IdApplicationFor: string;
  IdStatus: string;
}

export interface ApplicationForRefundList extends ApplicationForRefundDTO {
  DateOfSubmission: Date | string | null;
  applicationForRefundApplicationForReasons: ApplicationForReasonsList[];
}
