import { Divider } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import { deletePosition } from '../../../api/Position';
import DeleteBtn from '../../../components/DeleteBtn';
import { NotificationContext } from '../../../contexts/NotificationContext';
import {
  createSnackbarError,
  createSnackbarSuccess,
} from '../../../hooks/useNotification';
import { PositionDTO } from '../../../types/DTO/Position';

const PositionsListStyle = styled.div`
  padding: 24px;

  .row-content {
    display: grid;
    grid-template-columns: 1fr 56px;
  }
`;

interface Props {
  positions: PositionDTO[];
  fetchPositions: Function;
}

const PositionsList = ({ positions, fetchPositions }: Props) => {
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

  return (
    <PositionsListStyle>
      {positions.map((position) => (
        <div key={position.IdPosition}>
          <div className="row-content">
            <h3>{position.Name}</h3>
            <DeleteBtn onClick={() => handleDeleteItem(position.IdPosition)} />
          </div>
          <Divider />
        </div>
      ))}
    </PositionsListStyle>
  );
};

export default PositionsList;
