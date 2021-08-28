import HeaderListStyled from '../../components/styled/HeaderListStyled';

const CompaniesListHeader = () => {
  return (
    <HeaderListStyled className="grid-company">
      <>
        <p>Nazwa</p>
        <p>NIP</p>
        <p>Adres</p>
      </>
    </HeaderListStyled>
  );
};

export default CompaniesListHeader;
