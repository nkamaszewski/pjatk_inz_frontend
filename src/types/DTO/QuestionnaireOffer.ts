import { OfferDTO } from './Offer';

export interface QuestionnaireOffer {
  IdQuestionnaireOffer: string;
  Year: number;
  IdPerson: string;
  questionnaireOfferOffer: OfferDTO[];
}
