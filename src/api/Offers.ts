import { axiosJWT } from 'helpers/tokenAxios';
import { OfferDTO } from '../types/DTO/Offer';

export const getOffers = () => axiosJWT.get('/offer/');

export const postOffer = (offer: {
  Topic: string;
  Link: string;
  Price: number;
  IdQuestionnaireOffer: string;
}) => axiosJWT.post('/offer/', offer);

export const updateOffer = (offer: OfferDTO) =>
  axiosJWT.put(`/offer/${offer.IdOffer}`, offer);

export const deleteOffer = (id: string) => axiosJWT.delete(`/offer/${id}`);
