import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const EmploymentListHeader = () => {
  const {
    language: {
      schema: { lastName, firstName, department, division, position },
    },
  } = useLanguage();

  return (
    <HeaderListStyled className="grid-employment">
      <>
        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{department}</p>
        <p>{division}</p>
        <p>{position}</p>
      </>
    </HeaderListStyled>
  );
};

export default EmploymentListHeader;
