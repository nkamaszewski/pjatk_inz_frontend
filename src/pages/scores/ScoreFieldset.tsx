import { useLanguage } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { ScoreContent } from './ScoreContent';

interface Props {
  closeDrawer: () => void;
}

const ScoreFieldset = ({ closeDrawer }: Props) => {
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset title={schema.addARating} closeDrawer={closeDrawer} />

      <ScoreContent closeDrawer={closeDrawer} />
    </FieldsetStyled>
  );
  
};

export default ScoreFieldset;
