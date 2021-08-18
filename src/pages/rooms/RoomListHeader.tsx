import HeaderListStyled from '../../components/styled/HeaderListStyled';

const RoomListHeader = () => {
  return (
    <HeaderListStyled className="grid-room">
      <>
        <p>Nazwa</p>
        <p>Powierzchnia</p>
        <p>Miejsca 1</p>
        <p>Miejsca 2</p>
        <p>Miejsca 3</p>
        <p>Miejsca 4</p>
      </>
    </HeaderListStyled>
  );
};

export default RoomListHeader;
