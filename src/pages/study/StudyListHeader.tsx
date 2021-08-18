import HeaderListStyled from '../../components/styled/HeaderListStyled';

const StudyListHeader = () => {
  return (
    <HeaderListStyled className="grid-coach">
      <>
        <p>Kierunek</p>
        <p>Uczelnia</p>
        <p>Miasto</p>
        <p>Tryb</p>
        <p>Poziom</p>
      </>
    </HeaderListStyled>
  );
};

export default StudyListHeader;
