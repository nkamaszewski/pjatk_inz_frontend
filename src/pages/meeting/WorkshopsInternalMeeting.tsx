import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { FilterPanel } from './FilterPanel';
import MeetingFieldset from './MeetingFieldset';
import MeetingList from './MeetingList';
import { useMeetingList } from './useMeetingList';

const WorkshopsInternalMeetingStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const WorkshopsInternalMeeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { meetings, fetchMeetings } = useMeetingList();

  const { timetable } = useLanguageSchema();

  return (
    <WorkshopsInternalMeetingStyled>
      <PageHeader title={timetable} />
      <AddFab className="page-panel" onClick={() => setIsOpen(true)}>
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <MeetingFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchMeetings={fetchMeetings}
        />
      </Drawer>
      {meetings.length ? (
        <MeetingList meetings={meetings} fetchMeetings={fetchMeetings} />
      ) : (
        <NoData />
      )}
    </WorkshopsInternalMeetingStyled>
  );
};

export default WorkshopsInternalMeeting;
