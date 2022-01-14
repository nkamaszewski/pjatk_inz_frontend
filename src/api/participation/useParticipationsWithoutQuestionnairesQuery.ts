import { useQuery } from 'react-query';
import { getParticipationsWithoutQuestionnaires } from './Participation';

export const PARTICIPATIONS_WITHOUT_QUESTIONNAIRES_QUERY_KEY = [
  'participationsWithoutQuestionnaires',
];

export const useParticipationsWithoutQuestionnairesQuery = () => {
  const query = useQuery(PARTICIPATIONS_WITHOUT_QUESTIONNAIRES_QUERY_KEY, () =>
    getParticipationsWithoutQuestionnaires()
  );

  return query;
};
