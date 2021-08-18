import styled from 'styled-components';
import RoomContent from './RoomContent';

const RoomFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchRooms: Function;
}

const RoomFieldset = ({ closeDrawer, fetchRooms }: Props) => {
  return (
    <RoomFieldsetStyle>
      <RoomContent closeDrawer={closeDrawer} fetchRooms={fetchRooms} />
    </RoomFieldsetStyle>
  );
};

export default RoomFieldset;
