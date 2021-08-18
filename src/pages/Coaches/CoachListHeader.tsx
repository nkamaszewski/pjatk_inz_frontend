import HeaderListStyled from '../../components/styled/HeaderListStyled';
const CoachListHeader = () => {
  return (
    <HeaderListStyled className="grid-coach">
      <>
        <p>Imię</p>
        <p>Nazwisko</p>
        <p>Tytuł zawodowy</p>
      </>
    </HeaderListStyled>
  );
};

export default CoachListHeader;
