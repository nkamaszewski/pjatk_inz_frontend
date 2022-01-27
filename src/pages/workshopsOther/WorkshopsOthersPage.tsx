import { Drawer } from '@material-ui/core';
import AddFab from 'components/AddFab';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import { useWorkshopList } from './useWorkshopsList';
import WorkshopFieldset from './WorkshopFieldset';
import { WorkshopsList } from './WorkshopsList';

const WorkshopsOthersStyled = styled.div``;

export const WorkshopsOthersPage = () => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const { workshops, fetchWorkshops } = useWorkshopList();
  const { otherTtrainings } = useLanguageSchema();
  return (
    <WorkshopsOthersStyled>
      <PageHeader title={otherTtrainings} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <WorkshopFieldset
          closeDrawer={closeDrawer}
          fetchWorkshops={fetchWorkshops}
        />
      </Drawer>
      {workshops.length ? (
        <WorkshopsList workshops={workshops} fetchWorkshops={fetchWorkshops} />
      ) : (
        <NoData />
      )}
    </WorkshopsOthersStyled>
  );
};
