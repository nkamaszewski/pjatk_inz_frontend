import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const CompaniesListHeader = () => {
  const { name, taxId, address } = useLanguageSchema();
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
