import { axiosJWT } from 'helpers/tokenAxios';
import { QuestionnaireListDTO } from 'types/DTO/Questionnaire';

export const getQuestionnaire = () =>
  axiosJWT.get<QuestionnaireListDTO[]>('/questionnaires/');
