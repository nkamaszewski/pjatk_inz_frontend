import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const DocumentAdditionalListHeader = () => {
  const { consisting, dateOfSubmission } = useLanguageSchema();
  return (
    <>
      <HeaderListStyled className="grid-header">
        <>
          <p>{consisting}</p>
          <p>{dateOfSubmission}</p>
        </>
      </HeaderListStyled>
    </>
  );
};

export default DocumentAdditionalListHeader;
