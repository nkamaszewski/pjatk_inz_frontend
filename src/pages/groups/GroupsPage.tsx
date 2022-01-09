import { Drawer } from '@material-ui/core';
import { useGroupsListQuery } from 'api/group/useGroupsListQuery';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import FilterPanel from './FilterPanel';
import GroupFieldset from './GroupFieldset';
import GroupList from './GroupList';

const GroupsPageStyled = styled.div`
  .page-panel {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const GroupsPage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const groupsListQuery = useGroupsListQuery();
  const schema = useLanguageSchema();

  return (
    <GroupsPageStyled>
      <PageHeader title={schema.groups} />
      <AddFab onClick={openDrawer} className="page-panel">
        <FilterPanel />
      </AddFab>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <GroupFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {groupsListQuery.data?.data.length ? (
        <GroupList groups={groupsListQuery.data.data} />
      ) : (
        <NoData />
      )}
    </GroupsPageStyled>
  );
};

export default GroupsPage;
