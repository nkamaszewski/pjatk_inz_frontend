import { Divider, Drawer } from '@material-ui/core';
import { useDeletePositionMutation } from 'api/position/useDeletePositionMutation';
import { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { PositionDTO } from '../../types/DTO/Position';
import PositionFieldset from './PositionFieldset';

const PositionsListStyle = styled.div`
  padding: 24px;

  .row-content {
    display: grid;
    grid-template-columns: 1fr 56px 56px;
  }
`;

interface Props {
  positions: PositionDTO[];
}

const PositionsList = ({ positions }: Props) => {
  const deleteMutation = useDeletePositionMutation();
  const [editPosition, setEditPosition] = useState<PositionDTO | null>(null);

  const handleCloseDrawer = () => setEditPosition(null);

  return (
    <PositionsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editPosition)}
        onClose={handleCloseDrawer}
      >
        <PositionFieldset
          closeDrawer={handleCloseDrawer}
          editPosition={editPosition}
        />
      </Drawer>
      {positions.map((position) => (
        <div key={position.IdPosition}>
          <div className="row-content">
            <h3>{position.Name}</h3>
            <EditBtn onClick={() => setEditPosition(position)} />
            <DeleteBtn
              onClick={() => deleteMutation.mutate({ id: position.IdPosition })}
            />
          </div>
          <Divider />
        </div>
      ))}
    </PositionsListStyle>
  );
};

export default PositionsList;
