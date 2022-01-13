import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from '@material-ui/core';
import { StarRating } from 'components/controls_UI/StarRating';
import { formatDate } from 'helpers/formatDate';
import { useTheme } from 'providers/ThemeContext';
import styled from 'styled-components';
import { QuestionnaireListDTO } from 'types/DTO/Questionnaire';
import { getAvgScore } from './getAvgScore';

const ScoreRowStyle = styled.div`
  font-weight: bold;
  .details {
    padding: 24px;
    background-color: ${({ theme }) => theme.primaryBackground};
    display: grid;
    grid-template-columns: 1fr 350px;
    color: ${({ theme }) => theme.primaryColor};

    .avg {
      align-self: center;
      span {
        margin-left: 16px;
        font-size: 54px;
      }
    }
  }

  .info {
    display: grid;
    grid-template-columns: 250px auto 250px;
    grid-gap: 24px;
  }
  .rate {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
`;

interface ScoreRowProps {
  score: QuestionnaireListDTO;
  issues: {
    Issue1: string;
    Issue2: string;
    Issue3: string;
    Issue4: string;
    Issue5: string;
  };
}

export const ScoreRow = ({ score, issues }: ScoreRowProps) => {
  const { theme } = useTheme();
  return (
    <ScoreRowStyle theme={theme}>
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faCaretSquareDown} />}
          aria-controls="panel1a-content"
          id={score.IdQuestionnaire}
        >
          <div className="info">
            <p>{score.Name}</p>
            <p> {`${score.FirstName} ${score.LastName}`}</p>
            <p>{formatDate(score.Date)}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails className="details">
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
          <div className="avg">
            <p>
              Średnia: <span>{getAvgScore(score)} / 5</span>
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </ScoreRowStyle>
  );
};
