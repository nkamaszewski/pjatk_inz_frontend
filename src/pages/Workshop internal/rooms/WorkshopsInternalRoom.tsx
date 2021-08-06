import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getRooms } from '../../../api/Room';
import PageHeader from '../../../components/PageHeader';
import { RoomDTO } from '../../../types/DTO/Room';
import RoomFieldset from './RoomFieldset';
import RoomList from './RoomList';

const WorkshopsInternalRoom = () => {
  const [rooms, setRooms]: [RoomDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchRooms = () => {
    try {
      getRooms().then((res) => {
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
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <RoomFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchRooms={fetchRooms}
        />
      </Drawer>
      <RoomList rooms={rooms} />
    </div>
  );
};

export default WorkshopsInternalRoom;
