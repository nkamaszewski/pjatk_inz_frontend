import { OfferDTO } from './Offer';

export interface QuestionnaireOfferDTO {
  IdQuestionnaireOffer: string;
  Year: number;
  IdPerson: string;
  questionnaireOfferOffer: OfferDTO[];
}
