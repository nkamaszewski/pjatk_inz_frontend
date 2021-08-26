import { Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteCoach } from '../../api/Coach';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
import { CoachDTO } from '../../types/DTO/Coach';
import CoachFieldset from './CoachFieldset';
import CoachListHeader from './CoachListHeader';

const CoachListStyle = styled.div`
  padding: 16px;

  .grid-coach {
    display: grid;
    grid-template-columns: 20% 20% 1fr repeat(2, 56px);
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  coaches: CoachDTO[];
  fetchCoaches: () => void;
}

const CoachList = ({ coaches, fetchCoaches }: Props) => {
  const [editCoach, setEditCoach]: [CoachDTO | null, Function] = useState(null);
  const { setSnackbar } = useSnackbar();
  const handleCloseDrawer = () => setEditCoach(null);
  const handleDeleteItem = async (id: string) => {
    try {
      await deleteCoach(id);
      fetchCoaches();
      setSnackbar(createSnackbarSuccess('usunięto szkoleniowca'));
    } catch (e) {
      setSnackbar(createSnackbarError('nie udało się usunąć szkoleniowca!'));
    }
  };

  return (
    <CoachListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editCoach)}
        onClose={handleCloseDrawer}
      >
        <CoachFieldset
          closeDrawer={handleCloseDrawer}
          fetchCoaches={fetchCoaches}
          editCoach={editCoach}
        />
      </Drawer>
      <CoachListHeader />
      {coaches.map((coach) => (
        <Card key={coach.IdPerson} className="grid-coach row">
          <p>{coach.CoachPerson.FirstName}</p>
          <p>{coach.CoachPerson.LastName}</p>
          <p>{coach.JobTitle}</p>
          <EditBtn onClick={() => setEditCoach(coach)} />
          <DeleteBtn onClick={() => handleDeleteItem(coach.IdPerson)} />
        </Card>
      ))}
    </CoachListStyle>
  );
};

export default CoachList;
