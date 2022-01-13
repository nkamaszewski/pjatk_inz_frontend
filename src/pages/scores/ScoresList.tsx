import { Card } from '@material-ui/core';
import { useIssuesQuery } from 'api/issue/useIssuesQuery';
import { StarRating } from 'components/controls_UI/StarRating';
import { formatDate } from 'helpers/formatDate';
import { useMemo } from 'react';
import styled from 'styled-components';
import { QuestionnaireListDTO } from 'types/DTO/Questionnaire';
import { getAvgScore } from './getAvgScore';

const ScoresListStyled = styled.div`
  padding: 16px;
  .card {
    background-color: rgb(238, 240, 245);
    padding: 24px;
    display: grid;
    grid-template-columns: 500px 1fr;
    margin-bottom: 16px;
  }

  .info {
  }
  .rate {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
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
  }, [issuesQuery.data?.data]);

  return (
    <ScoresListStyled>
      {scores.map((score) => (
        <Card className="card">
          <div className="info">
            <h2>{score.Name}</h2>
            <h2>{formatDate(score.Date)}</h2>
            <h2>{`${score.FirstName} ${score.LastName}`}</h2>
            <h4>Średnia: {getAvgScore(score)} / 5</h4>
          </div>
          <div className="rates">
            <div className="rate">
              <p>{issues.Issue1}: </p>
              <StarRating value={score.Issue1} disabled={true} />
            </div>
            <div className="rate">
              <p>{issues.Issue2}: </p>
              <StarRating value={score.Issue2} disabled={true} />
            </div>
            <div className="rate">
              <p>{issues.Issue3}: </p>
              <StarRating value={score.Issue3} disabled={true} />
            </div>
            <div className="rate">
              <p>{issues.Issue4}: </p>
              <StarRating value={score.Issue4} disabled={true} />
            </div>
            <div className="rate">
              <p>{issues.Issue5}: </p>
              <StarRating value={score.Issue5} disabled={true} />
            </div>
          </div>
        </Card>
      ))}
    </ScoresListStyled>
  );
};
