import styled from 'styled-components';
import { PositionDTO } from '../../../types/DTO/Position';
import PositionContent from './PositionContent';

const PositionFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
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
      <PositionContent
        closeDrawer={closeDrawer}
        fetchPositions={fetchPositions}
        editPosition={editPosition}
      />
    </PositionFieldsetStyle>
  );
};

export default PositionFieldset;
