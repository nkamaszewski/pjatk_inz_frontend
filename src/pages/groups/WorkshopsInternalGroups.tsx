import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGroups } from '../../api/Group';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { useFilter } from '../../contexts/FilterContext';
import { GroupDTO } from '../../types/DTO/Group';
import FilterPanel from './FilterPanel';
import GroupFieldset from './GroupFieldset';
import GroupList from './GroupList';

const WorkshopsInternatlGroupsStyle = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const WorkshopsInternalGroups = () => {
  const [groups, setGroups]: [GroupDTO[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    group: { filters },
  } = useFilter();

  const fetchGroups = () => {
    try {
      getGroups(filters).then((res) => {
        setGroups(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, [filters]);

  return (
    <WorkshopsInternatlGroupsStyle>
      <PageHeader title="Grupy" />
      <AddFab onClick={() => setIsOpen(true)} className="page-panel">
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <GroupFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchGroups={fetchGroups}
        />
      </Drawer>
      <GroupList groups={groups} fetchGroups={fetchGroups} />
    </WorkshopsInternatlGroupsStyle>
  );
};

export default WorkshopsInternalGroups;
