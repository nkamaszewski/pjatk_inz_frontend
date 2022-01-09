import { Drawer } from '@material-ui/core';
import { useTrainingsListQuery } from 'api/training/useTrainingsListQuery';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import FilterPanel from './FilterPanel';
import TrainingFieldset from './TrainingFieldset';
import TrainingList from './TrainingList';

const TrainingsPageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const TrainingsPage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const trainingsListQuery = useTrainingsListQuery();
  const { courses } = useLanguageSchema();

  return (
    <TrainingsPageStyled>
      <PageHeader title={courses} />
      <AddFab className="page-panel" onClick={openDrawer}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <TrainingFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {trainingsListQuery.data?.data.length ? (
        <TrainingList trainings={trainingsListQuery.data.data} />
      ) : (
        <NoData />
      )}
    </TrainingsPageStyled>
  );
};

export default TrainingsPage;
