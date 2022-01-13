import { Drawer } from '@material-ui/core';
import { useIssuesQuery } from 'api/issue/useIssuesQuery';
import { useQuestionnaireQuery } from 'api/questionnaire/useQuestionnaireQuery';
import AddFab from 'components/AddFab';
import { NoData } from 'components/NoData';
import PageHeader from 'components/PageHeader';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import ScoreFieldset from './ScoreFieldset';
import { ScoresList } from './ScoresList';

export const ScoresPage = () => {
  const questionnairesQuery = useQuestionnaireQuery();
  const issuesQuery = useIssuesQuery();
  const { open, openDrawer, closeDrawer } = useDrawer();
  const schema = useLanguageSchema();
  return (
    <>
      <PageHeader title={schema.scores} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <ScoreFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {questionnairesQuery.data?.data.length ? (
        <ScoresList scores={questionnairesQuery.data.data} />
      ) : (
        <NoData />
      )}
    </>
  );
};
