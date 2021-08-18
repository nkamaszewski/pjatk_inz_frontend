import { Divider, Drawer } from '@material-ui/core';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { deletePosition } from '../../api/Position';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { NotificationContext } from '../../contexts/NotificationContext';
import {
  createSnackbarError,
  createSnackbarSuccess,
} from '../../hooks/useNotification';
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
  fetchPositions: Function;
}

const PositionsList = ({ positions, fetchPositions }: Props) => {
  const [editPosition, setEditPosition]: [PositionDTO | null, Function] =
    useState(null);
  const notificationCtx = useContext(NotificationContext);

  const handleDeleteItem = async (id: string) => {
    try {
      await deletePosition(id);
      notificationCtx.setSnackbar(
        createSnackbarSuccess('Usunięto stanowisko!')
      );
      fetchPositions();
    } catch (e) {
      console.error(e);
      notificationCtx.setSnackbar(
        createSnackbarError('Nie udało się usunąć stanowiska!')
      );
    }
  };

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
          fetchPositions={fetchPositions}
          editPosition={editPosition}
        />
      </Drawer>
      {positions.map((position) => (
        <div key={position.IdPosition}>
          <div className="row-content">
            <h3>{position.Name}</h3>
            <EditBtn onClick={() => setEditPosition(position)} />
            <DeleteBtn onClick={() => handleDeleteItem(position.IdPosition)} />
          </div>
          <Divider />
        </div>
      ))}
    </PositionsListStyle>
  );
};

export default PositionsList;
