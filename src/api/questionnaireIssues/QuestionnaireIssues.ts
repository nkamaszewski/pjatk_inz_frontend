import { axiosJWT } from 'helpers/tokenAxios';
import { QuestionnaireIssueDTO } from 'types/DTO/QuestionnaireIssue';

export const getQuestionnaireIssues = () =>
  axiosJWT.get<QuestionnaireIssueDTO[]>('/questionnaireissues/');
