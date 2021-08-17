import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getCoaches } from '../../../api/Coach';
import AddFab from '../../../components/AddFab';
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
      <AddFab onClick={() => setIsOpen(true)} />
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
