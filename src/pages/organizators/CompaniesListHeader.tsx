import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const CompaniesListHeader = () => {
  const {
    language: {
      schema: { name, taxId, address },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-company">
      <>
        <p>{name}</p>
        <p>{taxId}</p>
        <p>{address}</p>
      </>
    </HeaderListStyled>
  );
};

export default CompaniesListHeader;
