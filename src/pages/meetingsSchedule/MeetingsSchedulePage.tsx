import { Drawer } from '@material-ui/core';
import { useMeetingsListQuery } from 'api/meeting/useMeetingsListQuery';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { FilterPanel } from './FilterPanel';
import MeetingFieldset from './MeetingFieldset';
import MeetingList from './MeetingList';

const MeetingsSchedulePageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const MeetingsSchedulePage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const meetingsListQuery = useMeetingsListQuery();
  const { timetable } = useLanguageSchema();

  return (
    <MeetingsSchedulePageStyled>
      <PageHeader title={timetable} />
      <AddFab className="page-panel" onClick={openDrawer}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <MeetingFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {meetingsListQuery.data?.data.length ? (
        <MeetingList meetings={meetingsListQuery.data.data} />
      ) : (
        <NoData />
      )}
    </MeetingsSchedulePageStyled>
  );
};
