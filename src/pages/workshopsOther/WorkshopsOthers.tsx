import { Drawer } from '@material-ui/core';
import AddFab from 'components/AddFab';
import { NoData } from 'components/NoData';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import { useWorkshopList } from './useWorkshopsList';
import WorkshopFieldset from './WorkshopFieldset';
import { WorkshopsList } from './WorkshopsList';

const WorkshopsOthersStyled = styled.div``;

export const WorkshopsOthers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { workshops, fetchWorkshops } = useWorkshopList();
  const {
    language: {
      schema: {
        otherTtrainings

      },
    },
  } = useLanguage();
  return (
    <WorkshopsOthersStyled>
      <PageHeader title={otherTtrainings} />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <WorkshopFieldset
          closeDrawer={() => setIsOpen(false)}
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
