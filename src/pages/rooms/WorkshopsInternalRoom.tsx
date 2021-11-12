import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useEffect, useState } from 'react';
import { getRooms } from '../../api/Room';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { RoomDTO } from '../../types/DTO/Room';
import RoomFieldset from './RoomFieldset';
import RoomList from './RoomList';

const WorkshopsInternalRoom = () => {
  const [rooms, setRooms]: [RoomDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchRooms = () => {
    try {
      getRooms().then((res) => {
        console.log(res);

        setRooms(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div>
      <PageHeader title="Sale" />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <RoomFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchRooms={fetchRooms}
        />
      </Drawer>
      {rooms.length ? (
        <RoomList rooms={rooms} fetchRooms={fetchRooms} />
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default WorkshopsInternalRoom;
