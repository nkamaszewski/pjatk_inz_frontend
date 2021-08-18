import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getApplicationsFor } from '../../api/Application';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { ApplicationForDTO } from '../../types/DTO/ApplicationFor';
import WorkshopFieldset from './WorkshopFieldset';
import WorkshopList from './WorkshopList';

const WorkshopStyle = styled.div``;

const Workshop = () => {
  const [applications, setApplications]: [ApplicationForDTO[], Function] =
    useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <WorkshopStyle>
      <PageHeader title="Wnioski propozycje szkoleń" />
      <AddFab onClick={() => setIsOpen(true)} />
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
