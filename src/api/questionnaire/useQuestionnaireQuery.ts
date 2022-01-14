import { useQuery } from 'react-query';
import { getQuestionnaire } from './Questionnaire';

export const QUESTIONNAIRES_QUERY_KEY = ['questionnaires'];

export const useQuestionnaireQuery = () => {
  const query = useQuery(QUESTIONNAIRES_QUERY_KEY, () => getQuestionnaire());

  return query;
};
