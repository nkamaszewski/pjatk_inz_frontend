import axios from 'axios';
import { OfferDTO } from '../types/DTO/Offer';

export const getOffers = () => axios.get('http://localhost:3000/api/offer/');

export const postOffer = (offer: {
  Topic: string;
  Link: string;
  Price: number;
  IdQuestionnaireOffer: string;
}) => axios.post('http://localhost:3000/api/offer/', offer);

export const updateOffer = (offer: OfferDTO) =>
  axios.put(`http://localhost:3000/api/offer/${offer.IdOffer}`, offer);

export const deleteOffer = (id: string) =>
  axios.delete(`http://localhost:3000/api/offer/${id}`);
