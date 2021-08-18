import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { RoomDTO } from '../../types/DTO/Room';
import RoomListHeader from './RoomListHeader';

const RoomListStyle = styled.div`
  padding: 16px;

  .grid-room {
    display: grid;
    grid-template-columns: 25% repeat(5, 15%);
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
  return (
    <RoomListStyle>
      <RoomListHeader />
      {rooms.map((room) => (
        <Card key={room.IdRoom} className="grid-room row">
          <p>{room.Name}</p>
          <p>{room.Area}</p>
          <p>{room.CapacitySet1}</p>
          <p>{room.CapacitySet2}</p>
          <p>{room.CapacitySet3}</p>
          <p>{room.CapacitySet4}</p>
        </Card>
      ))}
    </RoomListStyle>
  );
};

export default RoomList;
