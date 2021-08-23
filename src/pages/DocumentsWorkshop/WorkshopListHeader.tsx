import HeaderListStyled from '../../components/styled/HeaderListStyled';

const WorkshopListHeader = () => {
  return (
    <HeaderListStyled className="grid-workshop">
      <>
        <p>Data złożenia</p>
        <p>Walidacja</p>
        <p>Status</p>
      </>
    </HeaderListStyled>
  );
};

export default WorkshopListHeader;
