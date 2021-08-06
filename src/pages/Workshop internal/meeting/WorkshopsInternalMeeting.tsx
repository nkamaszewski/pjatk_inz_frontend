import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getMeetings } from '../../../api/Meeting';
import PageHeader from '../../../components/PageHeader';
import { MeetingDTO } from '../../../types/DTO/Meeting';
import MeetingFieldset from './MeetingFieldset';
import MeetingList from './MeetingList';

const WorkshopsInternalMeeting = () => {
  const [meetings, setMeetings]: [MeetingDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchMeetings = () => {
    try {
      getMeetings().then((res) => {
        setMeetings(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  return (
    <div>
      <PageHeader title="Harmonogram" />
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <MeetingFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchMeetings={fetchMeetings}
        />
      </Drawer>
      <MeetingList meetings={meetings} />
    </div>
  );
};

export default WorkshopsInternalMeeting;
