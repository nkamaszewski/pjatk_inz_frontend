import HeaderListStyled from '../../components/styled/HeaderListStyled';

const DocumentAdditionalListHeader = () => {
  return (
    <>
      <HeaderListStyled className="grid-document">
        <>
          <p>Nazwa</p>
          <p>Status</p>
          <p>Data złożenia</p>
        </>
      </HeaderListStyled>
    </>
  );
};

export default DocumentAdditionalListHeader;
