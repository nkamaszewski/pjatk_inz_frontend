import { Drawer } from '@material-ui/core';
import { useApplicationsListQuery } from 'api/application/useApplicationsListQuery';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import FilterPanel from './FilterPanel';
import { TrainingApplicationsFieldset } from './TrainingApplicationsFieldset';
import { TrainingApplicationsList } from './TrainingApplicationsList';

const TrainingApplicationsPageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const TrainingApplicationsPage = () => {
  const applicationsQuery = useApplicationsListQuery();
  const { open, openDrawer, closeDrawer } = useDrawer();
  const { trainingApplications } = useLanguageSchema();

  return (
    <TrainingApplicationsPageStyled>
      <PageHeader title={trainingApplications} />
      <AddFab className="page-panel" onClick={openDrawer}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <TrainingApplicationsFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {applicationsQuery.data?.data.length ? (
        <TrainingApplicationsList applications={applicationsQuery.data.data} />
      ) : (
        <NoData />
      )}
    </TrainingApplicationsPageStyled>
  );
};
