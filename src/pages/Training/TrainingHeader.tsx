import HeaderListStyled from '../../components/styled/HeaderListStyled';

const TrainingHeader = () => {
  return (
    <HeaderListStyled className="grid-trainings">
      <>
        <p>Nazwa</p>
        <p>Cena</p>
        <p>Organizator</p>
        <p>Od</p>
        <p>Do</p>
      </>
    </HeaderListStyled>
  );
};

export default TrainingHeader;
