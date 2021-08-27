import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getTrainings } from '../../api/Training';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { TrainingDTO } from '../../types/DTO/Training';
import TrainingFieldset from './TrainingFieldset';
import TrainingList from './TrainingList';

const WorkshopsTraining = () => {
  const [trainings, setTrainings] = useState<TrainingDTO[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchTrainings = () => {
    try {
      getTrainings().then((res) => {
        setTrainings(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);
  return (
    <div>
      <PageHeader title="Kursy" />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <TrainingFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchTrainings={fetchTrainings}
        />
      </Drawer>
      <TrainingList trainings={trainings} fetchTrainings={fetchTrainings} />
    </div>
  );
};

export default WorkshopsTraining;
