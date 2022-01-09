import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';
const CoachListHeader = () => {
  const { lastName, firstName, professionalTitle } = useLanguageSchema();
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
