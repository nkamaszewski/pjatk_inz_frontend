import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const TrainingHeader = () => {
  const { name, price, organizer, from, to } = useLanguageSchema();
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
