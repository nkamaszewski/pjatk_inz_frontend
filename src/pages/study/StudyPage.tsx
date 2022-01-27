import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import { StudiesListDTO } from 'types/DTO/Study';
import { getStudies } from '../../api/study/Study';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import StudyFieldset from './StudyFieldset';
import StudyList from './StudyList';

export const StudyPage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const [studies, setStudies] = useState<StudiesListDTO[]>([]);

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
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <StudyFieldset closeDrawer={closeDrawer} fetchStudies={fetchStudies} />
      </Drawer>
      {studies.length ? (
        <StudyList studies={studies} fetchStudies={fetchStudies} />
      ) : (
        <NoData />
      )}
    </div>
  );
};
