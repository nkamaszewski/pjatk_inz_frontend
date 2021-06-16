import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPositions } from '../../../api/apiRoutes';
import PageHeader from '../../../components/PageHeader';
import { Position } from '../../../types/DTO/Position';
import PositionFieldset from './PositionFieldset';
import PositionsList from './PositionsList';

const CompanyDataPositionsStyle = styled.div``;

const CompanyDataPositions = () => {
  const [positions, setPositions]: [Position[], Function] = useState([]);
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
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <PositionFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchPositions={fetchPositions}
        />
      </Drawer>
      <PositionsList positions={positions} />
    </CompanyDataPositionsStyle>
  );
};

export default CompanyDataPositions;
