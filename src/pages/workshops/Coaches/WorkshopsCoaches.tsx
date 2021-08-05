import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getCoaches } from '../../../api/Coach';
import PageHeader from '../../../components/PageHeader';
import { CoachDTO } from '../../../types/DTO/Coach';
import CoachFieldset from './CoachFieldset';
import CoachList from './CoachList';

const WorkshopsCoaches = () => {
  const [coaches, setCoaches]: [CoachDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCoaches = () => {
    try {
      getCoaches().then((res) => {
        setCoaches(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCoaches();
  }, []);

  return (
    <div>
      <PageHeader title="Szkoleniowcy " />
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <CoachFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchCoaches={fetchCoaches}
        />
      </Drawer>
      <CoachList coaches={coaches} />
    </div>
  );
};

export default WorkshopsCoaches;
