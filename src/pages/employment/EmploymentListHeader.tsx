import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const EmploymentListHeader = () => {
  const {
    language: { schema },
  } = useLanguage();

  return (
    <HeaderListStyled className="grid-employment">
      <>
        <p>{schema.firstName}</p>
        <p>{schema.lastName}</p>
        <p>{schema.department}</p>
        <p>{schema.division}</p>
        <p>{capFL(schema.position)}</p>
      </>
    </HeaderListStyled>
  );
};

export default EmploymentListHeader;
