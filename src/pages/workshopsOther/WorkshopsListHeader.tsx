import HeaderListStyled from 'components/styled/HeaderListStyled';
import { useLanguage } from 'providers/LanguageProvider';

export const WorkshopsListHeader = () => {
  const {
    language: {
      schema: {
        name
      },
    },
  } = useLanguage();
  return (
    <HeaderListStyled className="grid-workshops">
      <p>{name}</p>
    </HeaderListStyled>
  );
};
