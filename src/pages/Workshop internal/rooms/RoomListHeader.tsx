import styled from 'styled-components';

const RoomListHeaderStyle = styled.div`
  background-color: rgba(196, 196, 196, 0.25);
  font-size: 28px;
  padding: 16px;
`;

const RoomListHeader = () => {
  return (
    <RoomListHeaderStyle className="grid-room">
      <p>Nazwa</p>
      <p>Powierzchnia</p>
      <p>Miejsca 1</p>
      <p>Miejsca 2</p>
      <p>Miejsca 3</p>
      <p>Miejsca 4</p>
    </RoomListHeaderStyle>
  );
};

export default RoomListHeader;
