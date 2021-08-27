import { Card, Drawer } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteTraining } from '../../api/Training';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
import { formatDate } from '../../helpers/formatDate';
import { TrainingDTO } from '../../types/DTO/Training';
import TrainingFieldset from './TrainingFieldset';
import TrainingHeader from './TrainingHeader';

const TrainingListStyle = styled.div`
  padding: 16px;

  .grid-trainings {
    display: grid;
    grid-template-columns: 1fr 140px 1fr repeat(2, 140px) 56px 56px;
  }
  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  trainings: TrainingDTO[];
  fetchTrainings: () => void;
}

const TrainingList = ({ trainings, fetchTrainings }: Props) => {
  const [editTraining, setEditTraining] = useState<TrainingDTO | null>(null);
  const { setSnackbar } = useSnackbar();
  const handleCloseDrawer = () => setEditTraining(null);
  const handleDeleteItem = async (id: string) => {
    try {
      await deleteTraining(id);
      fetchTrainings();
      setSnackbar(createSnackbarSuccess('usunięto kurs'));
    } catch (e) {
      setSnackbar(createSnackbarError('nie udało się usunąć kursu!'));
    }
  };
  return (
    <TrainingListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editTraining)}
        onClose={handleCloseDrawer}
      >
        <TrainingFieldset
          closeDrawer={handleCloseDrawer}
          fetchTrainings={fetchTrainings}
          editTraining={editTraining}
        />
      </Drawer>
      <TrainingHeader />
      {trainings.map((training) => (
        <Card
          key={training.trainingEducation.IdEducation}
          className="grid-trainings row"
        >
          <p>{training.trainingTopic.Topic}</p>
          <p>{training.trainingEducation.Price} PLN</p>
          <p>{training.trainingCompany.Name}</p>
          <p>{formatDate(training.DateFrom)}</p>
          <p>{formatDate(training.DateTo)}</p>
          <EditBtn onClick={() => setEditTraining(training)} />
          <DeleteBtn
            onClick={() =>
              handleDeleteItem(training.trainingEducation.IdEducation)
            }
          />
        </Card>
      ))}
    </TrainingListStyle>
  );
};

export default TrainingList;
