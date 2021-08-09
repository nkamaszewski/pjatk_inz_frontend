import axios from 'axios';

export const getQuestionnaireOffers = () => axios.get('http://localhost:3000/api/questoffer/');

export const postQuestionnaireOffer = (questionnaireoffer: {
  Year: number;
  IdPerson: string;
  
}) => axios.post('http://localhost:3000/api/questoffer/', questionnaireoffer);

export const updateQuestionnaireOffer = (questionnaireoffer: {
    Year: number;
    IdPerson: string;
    IdQuestionnaireOffer:string;
    
  }) => axios.put( `http://localhost:3000/api/questoffer/${questionnaireoffer.IdQuestionnaireOffer}`,
    questionnaireoffer);

    export const deleteQuestionnaireOffer = (id: string) =>
  axios.delete(`http://localhost:3000/api/questoffer/${id}`);
  
