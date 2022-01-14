import { Button } from '@material-ui/core';
import { useIssuesQuery } from 'api/issue/useIssuesQuery';
import { useAddQuestionnaireMutation } from 'api/questionnaire/useAddQuestionnaireMutation';
import { ParticipationWithoutQuestionnaireSelect } from 'components/controls_UI/ParticipationWithoutQuestionnaireSelect';
import { StarRating } from 'components/controls_UI/StarRating';
import { formatDate } from 'helpers/formatDate';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { useScoreForm } from './useScoreForm';

const ScoreContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  IdParticipation: '',
  Date: '',
  Issue1: 0,
  Issue2: 0,
  Issue3: 0,
  Issue4: 0,
  Issue5: 0,
};
interface Props {
  closeDrawer: () => void;
}

export const ScoreContent = ({ closeDrawer }: Props) => {
  const issues = useIssuesQuery();
  const addMutation = useAddQuestionnaireMutation();
  const schema = useLanguageSchema();
  const scoreForm = useScoreForm()({
    initialValues,
    onSubmit: async (values) => {
      await addMutation.mutateAsync({
        ...values,
        Date: formatDate(new Date()) as string,
      });
      closeDrawer();
    },
  });

  return (
    <ScoreContentStyle>
      <ParticipationWithoutQuestionnaireSelect
        value={scoreForm.values.IdParticipation}
        onChange={(id) => scoreForm.setFieldValue('IdParticipation', id)}
        name="IdParticipation"
        onBlur={scoreForm.handleBlur}
        error={scoreForm.errors.IdParticipation}
        touched={scoreForm.touched.IdParticipation}
      />
      <StarRating
        label={issues.data?.data[0].Description}
        value={scoreForm.values.Issue1}
        onChange={(id) => scoreForm.setFieldValue('Issue1', id ?? 0)}
        name="Issue1"
        onBlur={scoreForm.handleBlur}
        error={scoreForm.errors.Issue1}
        touched={scoreForm.touched.Issue1}
      />
      <StarRating
        label={issues.data?.data[1].Description}
        value={scoreForm.values.Issue2}
        onChange={(id) => scoreForm.setFieldValue('Issue2', id ?? 0)}
        name="Issue2"
        onBlur={scoreForm.handleBlur}
        error={scoreForm.errors.Issue2}
        touched={scoreForm.touched.Issue2}
      />
      <StarRating
        label={issues.data?.data[2].Description}
        value={scoreForm.values.Issue3}
        onChange={(id) => scoreForm.setFieldValue('Issue3', id ?? 0)}
        name="Issue3"
        onBlur={scoreForm.handleBlur}
        error={scoreForm.errors.Issue3}
        touched={scoreForm.touched.Issue3}
      />
      <StarRating
        label={issues.data?.data[3].Description}
        value={scoreForm.values.Issue4}
        onChange={(id) => scoreForm.setFieldValue('Issue4', id ?? 0)}
        name="Issue4"
        onBlur={scoreForm.handleBlur}
        error={scoreForm.errors.Issue4}
        touched={scoreForm.touched.Issue4}
      />
      <StarRating
        label={issues.data?.data[4].Description}
        value={scoreForm.values.Issue5}
        onChange={(id) => scoreForm.setFieldValue('Issue5', id ?? 0)}
        name="Issue5"
        onBlur={scoreForm.handleBlur}
        error={scoreForm.errors.Issue5}
        touched={scoreForm.touched.Issue5}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => scoreForm.handleSubmit()}
      >
        {schema.save}
      </Button>
    </ScoreContentStyle>
  );
};
