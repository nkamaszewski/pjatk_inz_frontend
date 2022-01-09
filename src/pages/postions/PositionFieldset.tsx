import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { PositionDTO } from '../../types/DTO/Position';
import PositionContent from './PositionContent';

interface Props {
  closeDrawer: () => void;
  editPosition?: PositionDTO | null;
}

const PositionFieldset = ({ closeDrawer, editPosition }: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editPosition ? capFL(schema.edit) : schema.add} ${
          schema.position
        }`}
        closeDrawer={closeDrawer}
      />

      <PositionContent closeDrawer={closeDrawer} editPosition={editPosition} />
    </FieldsetStyled>
  );
};

export default PositionFieldset;
