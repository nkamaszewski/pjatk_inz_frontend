import { getQuestionnaireOffers } from 'api/questionnaireOffer/QuestionnaireOffer';
import { useQuery } from 'react-query';

export const QUESTIONNAIRE_OFFER_QUERY_KEY = ['questionnaireOffers'];

export const useQuestionnaireOffersQuery = () => {
  const query = useQuery(QUESTIONNAIRE_OFFER_QUERY_KEY, () =>
    getQuestionnaireOffers()
  );

  return query;
};
