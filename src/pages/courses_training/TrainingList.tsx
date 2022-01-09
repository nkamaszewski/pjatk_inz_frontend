import { Card, Drawer } from '@material-ui/core';
import { useDeleteTrainingMutation } from 'api/training/useDeleteTrainingMutation';
import { AddParticipation } from 'components/AddParticipation';
import { ParticipationFieldset } from 'components/participation/ParticipationFieldset';
import { useDrawer } from 'hooks/useDrawer';
import { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { formatDate } from '../../helpers/formatDate';
import { TrainingDTO } from '../../types/DTO/Training';
import TrainingFieldset from './TrainingFieldset';
import TrainingHeader from './TrainingHeader';

const TrainingListStyle = styled.div`
  padding: 16px;

  .grid-trainings {
    display: grid;
    grid-template-columns: 1fr 140px 1fr repeat(2, 140px) 56px 56px 56px;
  }
  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  trainings: TrainingDTO[];
}

const TrainingList = ({ trainings }: Props) => {
  const deleteMutation = useDeleteTrainingMutation();
  const [editTraining, setEditTraining] = useState<TrainingDTO | null>(null);
  const { open, openDrawer, closeDrawer } = useDrawer();
  const [selectedIdEducation, setSelectedIdEducation] = useState('');
  const handleCloseDrawer = () => setEditTraining(null);
  const handleAddParticipation = (id: string) => {
    setSelectedIdEducation(id);
    openDrawer();
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
          editTraining={editTraining}
        />
      </Drawer>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <ParticipationFieldset IdEducation={selectedIdEducation} />
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
              deleteMutation.mutate({
                id: training.trainingEducation.IdEducation,
              })
            }
          />
          <AddParticipation
            onClick={() =>
              handleAddParticipation(training.trainingEducation.IdEducation)
            }
          />
        </Card>
      ))}
    </TrainingListStyle>
  );
};

export default TrainingList;
