import { axiosJWT } from 'helpers/tokenAxios';
import { QuestionnaireOfferDTO } from 'types/DTO/QuestionnaireOffer';

export const getQuestionnaireOffers = () =>
  axiosJWT.get<QuestionnaireOfferDTO[]>('/questoffer/');

export const postQuestionnaireOffer = (questionnaireoffer: {
  Year: number;
  IdPerson: string;
}) => axiosJWT.post('/questoffer/', questionnaireoffer);

export const updateQuestionnaireOffer = (questionnaireoffer: {
  Year: number;
  IdPerson: string;
  IdQuestionnaireOffer: string;
}) =>
  axiosJWT.put(
    `/questoffer/${questionnaireoffer.IdQuestionnaireOffer}`,
    questionnaireoffer
  );

export const deleteQuestionnaireOffer = (id: string) =>
  axiosJWT.delete(`/questoffer/${id}`);
