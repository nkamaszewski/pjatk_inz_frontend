import { useIssuesQuery } from 'api/issue/useIssuesQuery';
import { useMemo } from 'react';
import styled from 'styled-components';
import { QuestionnaireListDTO } from 'types/DTO/Questionnaire';
import { ScoreRow } from './ScoreRow';

const ScoresListStyled = styled.div`
  padding: 16px;
`;

interface ScoresListProps {
  scores: QuestionnaireListDTO[];
}

export const ScoresList = ({ scores }: ScoresListProps) => {
  const issuesQuery = useIssuesQuery();

  const issues = useMemo(() => {
    if (!issuesQuery.data) {
      return {
        Issue1: '',
        Issue2: '',
        Issue3: '',
        Issue4: '',
        Issue5: '',
      };
    }

    const issuesList = issuesQuery.data.data;

    return {
      Issue1: issuesList[0].Description,
      Issue2: issuesList[1].Description,
      Issue3: issuesList[2].Description,
      Issue4: issuesList[3].Description,
      Issue5: issuesList[4].Description,
    };
  }, [issuesQuery.data]);

  return (
    <ScoresListStyled>
      {scores.map((score) => (
        <ScoreRow score={score} issues={issues} />
      ))}
    </ScoresListStyled>
  );
};
