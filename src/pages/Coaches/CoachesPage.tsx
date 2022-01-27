import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import { getCoaches } from '../../api/coach/Coach';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { CoachDTO } from '../../types/DTO/Coach';
import CoachFieldset from './CoachFieldset';
import CoachList from './CoachList';

export const CoachesPage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const [coaches, setCoaches]: [CoachDTO[], Function] = useState([]);

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

  const schema = useLanguageSchema();

  return (
    <div>
      <PageHeader title={schema.coaches} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <CoachFieldset closeDrawer={closeDrawer} fetchCoaches={fetchCoaches} />
      </Drawer>
      {coaches.length ? (
        <CoachList coaches={coaches} fetchCoaches={fetchCoaches} />
      ) : (
        <NoData />
      )}
    </div>
  );
};
