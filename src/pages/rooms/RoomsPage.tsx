import { Drawer } from '@material-ui/core';
import { useRoomsQuery } from 'api/room/useRoomsQuery';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import RoomFieldset from './RoomFieldset';
import RoomList from './RoomList';

export const RoomsPage = () => {
  const roomsQuery = useRoomsQuery();
  const { open, openDrawer, closeDrawer } = useDrawer();
  const schema = useLanguageSchema();

  return (
    <div>
      <PageHeader title={schema.rooms} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <RoomFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {roomsQuery.data?.data.length ? (
        <RoomList rooms={roomsQuery.data?.data} />
      ) : (
        <NoData />
      )}
    </div>
  );
};
