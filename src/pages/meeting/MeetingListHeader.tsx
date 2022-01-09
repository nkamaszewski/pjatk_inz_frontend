import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const GroupListHeader = () => {
  const { from, to, group, room, topic } = useLanguageSchema();
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
