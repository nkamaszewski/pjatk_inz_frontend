import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const GroupListHeader = () => {
  const {
    language: {
      schema: { name, participantsAmount },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-group">
      <>
        <p>{name}</p>
        <p>{participantsAmount}</p>
      </>
    </HeaderListStyled>
  );
};

export default GroupListHeader;
