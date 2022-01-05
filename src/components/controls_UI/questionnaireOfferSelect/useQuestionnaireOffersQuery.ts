import { getQuestionnaireOffers } from 'api/QuestionnaireOffer';
import { useQuery } from 'react-query';

export const useQuestionnaireOffersQuery = () => {
  const query = useQuery(['questionnaireOffers', 'control_ui'], () =>
    getQuestionnaireOffers()
  );

  return query;
};
