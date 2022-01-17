import { postQuestionnaireOffer } from 'api/questionnaireOffer/QuestionnaireOffer';
import { useMutation, useQueryClient } from 'react-query';
import { QUESTIONNAIRE_OFFER_QUERY_KEY } from './useQuestionnaireOffersQuery';

export const useQuestionnaireOfferMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postQuestionnaireOffer, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUESTIONNAIRE_OFFER_QUERY_KEY);
    },
  });

  return mutation;
};
