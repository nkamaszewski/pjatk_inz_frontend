import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import PositionFieldset from './PositionFieldset';
import PositionsList from './PositionsList';
import { usePositionsQuery } from 'api/position/usePositionsQuery';

export const PositionsPage = () => {
  const positionsQuery = usePositionsQuery();
  const { open, openDrawer, closeDrawer } = useDrawer();
  const schema = useLanguageSchema();

  return (
    <>
      <PageHeader title={schema.positions} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <PositionFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {positionsQuery.data?.data.length ? (
        <PositionsList positions={positionsQuery.data.data} />
      ) : (
        <NoData />
      )}
    </>
  );
};
