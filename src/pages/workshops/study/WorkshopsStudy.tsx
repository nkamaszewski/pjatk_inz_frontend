import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getStudies } from '../../../api/Study';
import PageHeader from '../../../components/PageHeader';
import StudyFieldset from './StudyFieldset';

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
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <StudyFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchStudies={fetchStudies}
        />
      </Drawer>
      {/* <CoachList coaches={coaches} /> */}
    </div>
  );
};

export default WorkshopsStudy;
