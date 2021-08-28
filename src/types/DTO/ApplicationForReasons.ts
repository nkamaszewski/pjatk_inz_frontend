export interface ApplicationForReasonsDTO {
  IdReasonForRefund: string;
  IdApplicationForRefund: string;
  IdStatus: string;
}

export interface ApplicationForReasonsList extends ApplicationForReasonsDTO {
  applicationForReasonsReasonForRefund: { Name: string };
}
