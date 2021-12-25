import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const DocumentAdditionalListHeader = () => {
  const {
    language: {
      schema: { consisting, dateOfSubmission },
    },
  } = useLanguage();
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
