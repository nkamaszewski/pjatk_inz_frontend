import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const GroupListHeader = () => {
  const {
    language: {
      schema: { name, participantsAmount, subject, topic },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-group">
      <>
        <p>{name}</p>
        <p>{participantsAmount}</p>
        <p>{topic}</p>
        <p>{subject}</p>
      </>
    </HeaderListStyled>
  );
};

export default GroupListHeader;
