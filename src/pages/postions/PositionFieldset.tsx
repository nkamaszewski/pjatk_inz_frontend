import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { PositionDTO } from '../../types/DTO/Position';
import PositionContent from './PositionContent';

interface Props {
  closeDrawer: () => void;
  fetchPositions: Function;
  editPosition?: PositionDTO | null;
}

const PositionFieldset = ({
  closeDrawer,
  fetchPositions,
  editPosition,
}: Props) => {
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editPosition ? capFL(schema.edit) : schema.add} ${schema.position}`}
        closeDrawer={closeDrawer}
      />

      <PositionContent
        closeDrawer={closeDrawer}
        fetchPositions={fetchPositions}
        editPosition={editPosition}
      />
    </FieldsetStyled>
  );
};

export default PositionFieldset;
