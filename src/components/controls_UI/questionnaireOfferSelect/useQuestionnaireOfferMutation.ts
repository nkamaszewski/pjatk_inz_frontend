import { postQuestionnaireOffer } from 'api/QuestionnaireOffer';
import { useMutation, useQueryClient } from 'react-query';

export const useQuestionnaireOfferMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postQuestionnaireOffer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['questionnaireOffers', 'controls_ui']);
    },
  });

  return mutation;
};
