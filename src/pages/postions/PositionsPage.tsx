import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguage } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import { getPositions } from '../../api/Position';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { PositionDTO } from '../../types/DTO/Position';
import PositionFieldset from './PositionFieldset';
import PositionsList from './PositionsList';

export const PositionsPage = () => {
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

  const {
    language: { schema },
  } = useLanguage();

  return (
    <>
      <PageHeader title={schema.positions} />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <PositionFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchPositions={fetchPositions}
        />
      </Drawer>
      {positions.length ? (
        <PositionsList positions={positions} fetchPositions={fetchPositions} />
      ) : (
        <NoData />
      )}
    </>
  );
};
