import styled from 'styled-components';
import HeaderFieldset from '../../components/HeaderFieldset';
import { PositionDTO } from '../../types/DTO/Position';
import PositionContent from './PositionContent';

const PositionFieldsetStyle = styled.div`
  padding: 0 24px;
  width: 600px;
`;

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
    <PositionFieldsetStyle>
      <HeaderFieldset
        title={`${editPosition ? 'Edytuj' : 'Dodaj'} stanowisko`}
        closeDrawer={closeDrawer}
      />

      <PositionContent
        closeDrawer={closeDrawer}
        fetchPositions={fetchPositions}
        editPosition={editPosition}
      />
    </PositionFieldsetStyle>
  );
};

export default PositionFieldset;
