import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import FilterPanel from './FilterPanel';
import { useApplicationsList } from './useApplicationsList';
import { TrainingApplicationsContent } from './TrainingApplicationsContent';
import { TrainingApplicationsList } from './TrainingApplicationsList';

const TrainingApplicationsPageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const TrainingApplicationsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { applications, fetchApplications } = useApplicationsList();
  const { trainingApplications } = useLanguageSchema();

  return (
    <TrainingApplicationsPageStyled>
      <PageHeader title={trainingApplications} />
      <AddFab className="page-panel" onClick={() => setIsOpen(true)}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <TrainingApplicationsContent
          closeDrawer={() => setIsOpen(false)}
          fetchApplications={fetchApplications}
        />
      </Drawer>
      {applications.length ? (
        <TrainingApplicationsList
          applications={applications}
          fetchApplications={fetchApplications}
        />
      ) : (
        <NoData />
      )}
    </TrainingApplicationsPageStyled>
  );
};
