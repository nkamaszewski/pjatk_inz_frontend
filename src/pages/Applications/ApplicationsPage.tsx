import { Drawer } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import FilterPanel from './FilterPanel';
import { useApplications } from './useApplications';
import WorkshopFieldset from './WorkshopFieldset';
import WorkshopList from './WorkshopList';

const ApplicationsPageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const ApplicationsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { applications, fetchApplications } = useApplications();

  return (
    <ApplicationsPageStyled>
      <PageHeader title="Wnioski propozycje szkoleń" />
      <AddFab className="page-panel" onClick={() => setIsOpen(true)}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <WorkshopFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchApplications={fetchApplications}
        />
      </Drawer>
      <WorkshopList
        applications={applications}
        fetchApplications={fetchApplications}
      />
    </ApplicationsPageStyled>
  );
};
