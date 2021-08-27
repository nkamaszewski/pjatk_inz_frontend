import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getApplicationsFor } from '../../api/Application';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { useFilter } from '../../contexts/FilterContext';
import { ApplicationForListDTO } from '../../types/DTO/ApplicationFor';
import FilterPanel from './FilterPanel';
import WorkshopFieldset from './WorkshopFieldset';
import WorkshopList from './WorkshopList';

const WorkshopStyle = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const Workshop = () => {
  const [applications, setApplications]: [ApplicationForListDTO[], Function] =
    useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    workshop: { filters },
  } = useFilter();

  const fetchApplications = () => {
    try {
      getApplicationsFor(filters).then((res) => {
        setApplications(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [filters]);

  return (
    <WorkshopStyle>
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
    </WorkshopStyle>
  );
};

export default Workshop;
