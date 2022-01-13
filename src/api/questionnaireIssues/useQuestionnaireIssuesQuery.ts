import { useQuery } from 'react-query';
import { getQuestionnaireIssues } from './QuestionnaireIssues';

export const QUESTIONNAIRE_ISSUES_QUERY_KEY = ['questionnaireIssues'];

export const useQuestionnaireIssuesQuery = () => {
  const query = useQuery(QUESTIONNAIRE_ISSUES_QUERY_KEY, () =>
    getQuestionnaireIssues()
  );

  return query;
};
