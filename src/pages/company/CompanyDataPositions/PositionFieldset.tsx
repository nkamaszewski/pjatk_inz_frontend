import styled from 'styled-components';
import PositionContent from './PositionContent';

const PositionFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchPositions: Function;
}

const PositionFieldset = ({ closeDrawer, fetchPositions }: Props) => {
  return (
    <PositionFieldsetStyle>
      <PositionContent
        closeDrawer={closeDrawer}
        fetchPositions={fetchPositions}
      />
    </PositionFieldsetStyle>
  );
};

export default PositionFieldset;
