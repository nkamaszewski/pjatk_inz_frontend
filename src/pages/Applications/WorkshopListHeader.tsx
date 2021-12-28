import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const WorkshopListHeader = () => {
  const {
    language: {
      schema: { dateOfSubmission, author, validationTable, status },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-workshop">
      <>
        <p>{dateOfSubmission}</p>
        <p>{author}</p>
        <p>{validationTable}</p>
        <p>{status}</p>
      </>
    </HeaderListStyled>
  );
};

export default WorkshopListHeader;
