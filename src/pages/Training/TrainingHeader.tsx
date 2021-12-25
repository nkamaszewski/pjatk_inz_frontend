import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const TrainingHeader = () => {
  const {
    language: {
      schema: { name, price, organizer, from, to },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-trainings">
      <>
        <p>{name}</p>
        <p>{price}</p>
        <p>{organizer}</p>
        <p>{from}</p>
        <p>{to}</p>
      </>
    </HeaderListStyled>
  );
};

export default TrainingHeader;
