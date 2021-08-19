import HeaderListStyled from '../../components/styled/HeaderListStyled';

const GroupListHeader = () => {
  return (
    <HeaderListStyled className="grid-group">
      <>
        <p>Nazwa</p>
        <p>Liczba uczestników</p>
      </>
    </HeaderListStyled>
  );
};

export default GroupListHeader;