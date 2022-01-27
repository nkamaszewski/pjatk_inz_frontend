import { Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useDeleteRoomMutation } from 'api/room/useDeleteRoomMutation';
import { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { RoomDTO } from '../../types/DTO/Room';
import RoomFieldset from './RoomFieldset';
import RoomListHeader from './RoomListHeader';

const RoomListStyle = styled.div`
  padding: 16px;

  .grid-room {
    display: grid;
    grid-template-columns: 1fr repeat(5, 140px) 56px 56px;
  }

  .item-centered {
    justify-self: center;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  rooms: RoomDTO[];
}

const RoomList = ({ rooms }: Props) => {
  const [editRoom, setEditRoom]: [RoomDTO | null, Function] = useState(null);
  const deleteRoom = useDeleteRoomMutation();

  const handleCloseDrawer = () => setEditRoom(null);

  return (
    <RoomListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editRoom)}
        onClose={handleCloseDrawer}
      >
        <RoomFieldset closeDrawer={handleCloseDrawer} editRoom={editRoom} />
      </Drawer>
      <RoomListHeader />
      {rooms.map((room) => (
        <Card key={room.IdRoom} className="grid-room row">
          <p>{room.Name}</p>
          <p>{room.Area} m2</p>
          <p className="item-centered">{room.CapacitySet1 ?? '---'}</p>
          <p className="item-centered">{room.CapacitySet2 ?? '---'}</p>
          <p className="item-centered">{room.CapacitySet3 ?? '---'}</p>
          <p className="item-centered">{room.CapacitySet4 ?? '---'}</p>
          <EditBtn onClick={() => setEditRoom(room)} />
          <DeleteBtn onClick={() => deleteRoom.mutate(room.IdRoom)} />
        </Card>
      ))}
    </RoomListStyle>
  );
};

export default RoomList;
