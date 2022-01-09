import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const WorkshopListHeader = () => {
  const { dateOfSubmission, author, validationTable, status, name } =
    useLanguageSchema();
  return (
    <HeaderListStyled className="grid-workshop">
      <>
        <p>{dateOfSubmission}</p>
        <p>{author}</p>
        <p>{name}</p>
        <p>{validationTable}</p>
        <p>{status}</p>
      </>
    </HeaderListStyled>
  );
};

export default WorkshopListHeader;
