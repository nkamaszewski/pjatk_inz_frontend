import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import FilterPanel from './FilterPanel';
import GroupFieldset from './GroupFieldset';
import GroupList from './GroupList';
import { useGroups } from './useGroups';

const GroupsPageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const GroupsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { groups, fetchGroups } = useGroups();
  const {
    language: { schema },
  } = useLanguage();

  return (
    <GroupsPageStyled>
      <PageHeader title={schema.groups} />
      <AddFab onClick={() => setIsOpen(true)} className="page-panel">
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <GroupFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchGroups={fetchGroups}
        />
      </Drawer>
      {groups.length ? (
        <GroupList groups={groups} fetchGroups={fetchGroups} />
      ) : (
        <NoData />
      )}
    </GroupsPageStyled>
  );
};

export default GroupsPage;
