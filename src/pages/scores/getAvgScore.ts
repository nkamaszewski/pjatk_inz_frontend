import { QuestionnaireListDTO } from 'types/DTO/Questionnaire';

export const getAvgScore = (score: QuestionnaireListDTO) => {
  const res =
    score.Issue1 + score.Issue2 + score.Issue3 + score.Issue4 + score.Issue5;
  return res / 5;
};
