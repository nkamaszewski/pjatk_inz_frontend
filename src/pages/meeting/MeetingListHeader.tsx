import { useLanguage } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const GroupListHeader = () => {
  const {
    language: {
      schema: { from, to, group, room, topic },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-meeting">
      <>
        <p>{from}</p>
        <p>{to}</p>
        <p>{topic}</p>
        <p>{group}</p>
        <p>{room}</p>
        <p />
        <p />
      </>
    </HeaderListStyled>
  );
};

export default GroupListHeader;
