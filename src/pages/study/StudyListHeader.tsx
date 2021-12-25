import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const StudyListHeader = () => {
  const {
    language: {
      schema: { fieldsOfStudy, school, city, mode, level },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-coach">
      <>
        <p>{fieldsOfStudy}</p>
        <p>{school}</p>
        <p>{city}</p>
        <p>{mode}</p>
        <p>{level}</p>
      </>
    </HeaderListStyled>
  );
};

export default StudyListHeader;
