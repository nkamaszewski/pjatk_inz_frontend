import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import { PositionDTO } from '../../../types/DTO/Position';

const PositionsListStyle = styled.div`
  padding: 24px;
`;

interface Props {
  positions: PositionDTO[];
}

const PositionsList = ({ positions }: Props) => {
  return (
    <PositionsListStyle>
      {positions.map((position) => (
        <div key={position.IdPosition}>
          <h3>{position.Name}</h3>
          <Divider />
        </div>
      ))}
    </PositionsListStyle>
  );
};

export default PositionsList;
