import { useQuery } from 'react-query';
import { getQuestionnaire } from './Questionnaire';

export const QUESTIONNAIRE_QUERY_KEY = ['questionnaire'];

export const useQuestionnaireQuery = () => {
  const query = useQuery(QUESTIONNAIRE_QUERY_KEY, () => getQuestionnaire());

  return query;
};
