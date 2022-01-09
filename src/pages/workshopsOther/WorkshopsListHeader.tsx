import HeaderListStyled from 'components/styled/HeaderListStyled';
import { useLanguageSchema } from 'providers/LanguageProvider';

export const WorkshopsListHeader = () => {
  const { name } = useLanguageSchema();
  return (
    <HeaderListStyled className="grid-workshops">
      <p>{name}</p>
    </HeaderListStyled>
  );
};
