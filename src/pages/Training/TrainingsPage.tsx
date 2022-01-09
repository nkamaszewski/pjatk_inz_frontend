import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import FilterPanel from './FilterPanel';
import TrainingFieldset from './TrainingFieldset';
import TrainingList from './TrainingList';
import { useTrainings } from './useTrainings';

const TrainingsPageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const TrainingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { trainings, fetchTrainings } = useTrainings();
  const { courses } = useLanguageSchema();

  return (
    <TrainingsPageStyled>
      <PageHeader title={courses} />
      <AddFab className="page-panel" onClick={() => setIsOpen(true)}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <TrainingFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchTrainings={fetchTrainings}
        />
      </Drawer>
      {trainings.length ? (
        <TrainingList trainings={trainings} fetchTrainings={fetchTrainings} />
      ) : (
        <NoData />
      )}
    </TrainingsPageStyled>
  );
};

export default TrainingsPage;
