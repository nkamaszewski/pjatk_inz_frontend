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
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editPosition ? 'Edytuj' : 'Dodaj'} stanowisko`}
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
