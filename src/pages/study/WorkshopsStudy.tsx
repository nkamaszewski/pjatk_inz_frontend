import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import { StudiesListDTO } from 'types/DTO/Study';
import { getStudies } from '../../api/Study';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import StudyFieldset from './StudyFieldset';
import StudyList from './StudyList';

const WorkshopsStudy = () => {
  const [studies, setStudies] = useState<StudiesListDTO[]>([]);
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

  const { study } = useLanguageSchema();

  return (
    <div>
      <PageHeader title={study} />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <StudyFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchStudies={fetchStudies}
        />
      </Drawer>
      {studies.length ? (
        <StudyList studies={studies} fetchStudies={fetchStudies} />
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default WorkshopsStudy;
