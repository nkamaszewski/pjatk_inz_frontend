import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPositions } from '../../../api/Position';
import AddFab from '../../../components/AddFab';
import PageHeader from '../../../components/PageHeader';
import { PositionDTO } from '../../../types/DTO/Position';
import PositionFieldset from './PositionFieldset';
import PositionsList from './PositionsList';

const CompanyDataPositionsStyle = styled.div``;

const CompanyDataPositions = () => {
  const [positions, setPositions]: [PositionDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchPositions = () => {
    try {
      getPositions().then((res) => {
        setPositions(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <CompanyDataPositionsStyle>
      <PageHeader title="Firma stanowiska" />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <PositionFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchPositions={fetchPositions}
        />
      </Drawer>
      <PositionsList positions={positions} fetchPositions={fetchPositions} />
    </CompanyDataPositionsStyle>
  );
};

export default CompanyDataPositions;
