import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import FilterPanel from './FilterPanel';
import { useApplicationsList } from './useApplicationsList';
import { TrainingApplicationsFieldset } from './TrainingApplicationsFieldset';
import { TrainingApplicationsList } from './TrainingApplicationsList';

const TrainingApplicationsPageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const TrainingApplicationsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { applications } = useApplicationsList();
  const { trainingApplications } = useLanguageSchema();

  return (
    <TrainingApplicationsPageStyled>
      <PageHeader title={trainingApplications} />
      <AddFab className="page-panel" onClick={() => setIsOpen(true)}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <TrainingApplicationsFieldset closeDrawer={() => setIsOpen(false)} />
      </Drawer>
      {applications.length ? (
        <TrainingApplicationsList applications={applications} />
      ) : (
        <NoData />
      )}
    </TrainingApplicationsPageStyled>
  );
};
