import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getApplicationsFor } from '../../api/Application';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { useFilter, WorkshopStatus } from '../../contexts/FilterContext';
import { ApplicationForListDTO } from '../../types/DTO/ApplicationFor';
import StatusSelect from './StatusSelect';
import WorkshopFieldset from './WorkshopFieldset';
import WorkshopList from './WorkshopList';

const WorkshopStyle = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 80px 1fr auto;
  }

  .status-select {
    width: 140px;
  }
`;

const Workshop = () => {
  const [applications, setApplications]: [ApplicationForListDTO[], Function] =
    useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    workshop: { filters, setFilters },
  } = useFilter();

  const fetchApplications = () => {
    try {
      getApplicationsFor().then((res) => {
        setApplications(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleChangeStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilters((prev) => ({
      ...prev,
      status: event.target.value as WorkshopStatus,
    }));
  };

  return (
    <WorkshopStyle>
      <PageHeader title="Wnioski propozycje szkoleń" />
      <AddFab className="page-panel" onClick={() => setIsOpen(true)}>
        <h4>Filtruj:</h4>
        <div className="status-select">
          <StatusSelect value={filters.status} onChange={handleChangeStatus} />
        </div>
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
