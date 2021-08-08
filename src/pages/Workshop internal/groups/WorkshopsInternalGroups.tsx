import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getGroups } from '../../../api/Group';
import PageHeader from '../../../components/PageHeader';
import { GroupDTO } from '../../../types/DTO/Group';
import GroupFieldset from './GroupFieldset';
import GroupList from './GroupList';

const WorkshopsInternalGroups = () => {
  const [groups, setGroups]: [GroupDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchGroups = () => {
    try {
      getGroups().then((res) => {
        setGroups(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div>
      <PageHeader title="Grupy" />
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <GroupFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchGroups={fetchGroups}
        />
      </Drawer>
      <GroupList groups={groups} fetchGroups={fetchGroups} />
    </div>
  );
};

export default WorkshopsInternalGroups;
