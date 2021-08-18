import HeaderListStyled from '../../components/styled/HeaderListStyled';

const EmploymentListHeader = () => {
  return (
    <HeaderListStyled className="grid-employment">
      <>
        <p>Nazwisko</p>
        <p>Imię</p>
        <p>Pion</p>
        <p>Wydział</p>
        <p>Stanowisko</p>
      </>
    </HeaderListStyled>
  );
};

export default EmploymentListHeader;
