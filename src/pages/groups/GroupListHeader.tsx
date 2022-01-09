import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const GroupListHeader = () => {
  const { name, participantsAmount, subject, topic } = useLanguageSchema();
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
