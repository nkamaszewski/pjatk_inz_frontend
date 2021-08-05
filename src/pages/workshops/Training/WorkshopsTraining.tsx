import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getTrainings } from '../../../api/Training';
import PageHeader from '../../../components/PageHeader';
import TrainingFieldset from './TrainingFieldset';

const WorkshopsTraining = () => {
  const [trainings, setTrainings] = useState([]);
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
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <TrainingFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchTrainings={fetchTrainings}
        />
      </Drawer>
      {/* <StudyList studies={studies} /> */}
    </div>
  );
};

export default WorkshopsTraining;
