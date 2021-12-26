import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';
const CoachListHeader = () => {
  const {
    language: {
      schema: { lastName, firstName, professionalTitle },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-coach">
      <>
        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{professionalTitle}</p>
      </>
    </HeaderListStyled>
  );
};

export default CoachListHeader;
