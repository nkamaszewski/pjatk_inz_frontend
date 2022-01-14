import { axiosJWT } from 'helpers/tokenAxios';
import {
  QuestionnaireDTO,
  QuestionnaireListDTO,
} from 'types/DTO/Questionnaire';

export const getQuestionnaire = () =>
  axiosJWT.get<QuestionnaireListDTO[]>('/questionnaires/');

export const postQuestionnaire = (
  questionnaire: Omit<QuestionnaireDTO, 'IdQuestionnaire'>
) => axiosJWT.post<QuestionnaireListDTO[]>('/questionnaires/', questionnaire);
