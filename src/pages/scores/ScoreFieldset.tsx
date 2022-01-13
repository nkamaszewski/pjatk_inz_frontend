import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { ScoreContent } from './ScoreContent';

interface Props {
  closeDrawer: () => void;
}

const ScoreFieldset = ({ closeDrawer }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title="Dodaj ocenę" closeDrawer={closeDrawer} />

      <ScoreContent closeDrawer={closeDrawer} />
    </FieldsetStyled>
  );
};

export default ScoreFieldset;
