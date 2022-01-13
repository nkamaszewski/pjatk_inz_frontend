import styled from 'styled-components';
import { QuestionnaireListDTO } from 'types/DTO/Questionnaire';

const ScoresListStyled = styled.div``;

interface ScoresListProps {
  scores: QuestionnaireListDTO[];
}

export const ScoresList = ({ scores }: ScoresListProps) => {
  return <ScoresListStyled></ScoresListStyled>;
};
