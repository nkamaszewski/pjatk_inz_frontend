import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getStudies } from '../../api/Study';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import StudyFieldset from './StudyFieldset';
import StudyList from './StudyList';

const WorkshopsStudy = () => {
  const [studies, setStudies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchStudies = () => {
    try {
      getStudies().then((res) => {
        setStudies(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchStudies();
  }, []);

  return (
    <div>
      <PageHeader title="Studia" />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <StudyFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchStudies={fetchStudies}
        />
      </Drawer>
      <StudyList studies={studies} />
    </div>
  );
};

export default WorkshopsStudy;
