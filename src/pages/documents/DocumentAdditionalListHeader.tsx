import HeaderListStyled from '../../components/styled/HeaderListStyled';

const DocumentAdditionalListHeader = () => {
  return (
    <>
      <HeaderListStyled className="grid-header">
        <>
          <p>Składający</p>
          <p>Data złożenia</p>
        </>
      </HeaderListStyled>
    </>
  );
};

export default DocumentAdditionalListHeader;
