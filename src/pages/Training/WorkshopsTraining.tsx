import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTrainings } from '../../api/Training';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { useFilter } from '../../contexts/FilterContext';
import { TrainingDTO } from '../../types/DTO/Training';
import FilterPanel from './FilterPanel';
import TrainingFieldset from './TrainingFieldset';
import TrainingList from './TrainingList';

const WorkShopsTrainingStyle = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const WorkshopsTraining = () => {
  const [trainings, setTrainings] = useState<TrainingDTO[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    training: { filters },
  } = useFilter();

  const fetchTrainings = () => {
    try {
      getTrainings(filters).then((res) => {
        setTrainings(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, [filters]);
  return (
    <WorkShopsTrainingStyle>
      <PageHeader title="Kursy" />
      <AddFab className="page-panel" onClick={() => setIsOpen(true)}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <TrainingFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchTrainings={fetchTrainings}
        />
      </Drawer>
      <TrainingList trainings={trainings} fetchTrainings={fetchTrainings} />
    </WorkShopsTrainingStyle>
  );
};

export default WorkshopsTraining;
