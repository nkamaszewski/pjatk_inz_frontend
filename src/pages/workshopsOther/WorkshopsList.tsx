import { Card, Drawer } from '@material-ui/core';
import { AddParticipation } from 'components/AddParticipation';
import DeleteBtn from 'components/DeleteBtn';
import EditBtn from 'components/EditBtn';
import { ParticipationFieldset } from 'components/participation/ParticipationFieldset';
import { useDrawer } from 'hooks/useDrawer';
import { useState } from 'react';
import styled from 'styled-components';
import {
  OtherEducationDTO,
  OtherEducationListDTO,
} from 'types/DTO/OtherEducation';
import { useWorkshopCRUD } from './useWorkshopCRUD';
import WorkshopFieldset from './WorkshopFieldset';
import { WorkshopsListHeader } from './WorkshopsListHeader';

const WorkshopsListStyled = styled.div`
  padding: 16px;

  .grid-workshops {
    display: grid;
    grid-template-columns: 1fr 56px 56px 56px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface WorkshopsListProps {
  workshops: OtherEducationListDTO[];
  fetchWorkshops: () => void;
}

export const WorkshopsList = ({
  workshops,
  fetchWorkshops,
}: WorkshopsListProps) => {
  const [workshop, setWorkshop] = useState<OtherEducationDTO | null>(null);
  const { getItem, deleteItem } = useWorkshopCRUD();
  const { open, openDrawer, closeDrawer } = useDrawer();
  const {
    open: openParticipation,
    openDrawer: openDrawerParticipation,
    closeDrawer: closeDrawerParticipation,
  } = useDrawer();
  const [selectedIdEducation, setSelectedIdEducation] = useState('');
  const handleAddParticipation = (id: string) => {
    setSelectedIdEducation(id);
    openDrawerParticipation();
  };

  const handleEditWorkshop = async (id: string) => {
    const workshopToEdit = await getItem(id);
    setWorkshop(workshopToEdit);
    openDrawer();
  };

  const handleDeleteWorkshop = async (id: string) => {
    await deleteItem(id);
    fetchWorkshops();
  };
  return (
    <WorkshopsListStyled>
      <WorkshopsListHeader />
      {workshops.map((w) => (
        <Card key={w.IdEducation} className="grid-workshops row">
          <p>{w.Name}</p>
          <EditBtn onClick={() => handleEditWorkshop(w.IdEducation)} />
          <DeleteBtn onClick={() => handleDeleteWorkshop(w.IdEducation)} />
          <AddParticipation
            onClick={() => handleAddParticipation(w.IdEducation)}
          />
        </Card>
      ))}

      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <WorkshopFieldset
          closeDrawer={closeDrawer}
          fetchWorkshops={fetchWorkshops}
          workshop={workshop}
        />
      </Drawer>
      <Drawer
        anchor="right"
        open={openParticipation}
        onClose={closeDrawerParticipation}
      >
        <ParticipationFieldset IdEducation={selectedIdEducation} />
      </Drawer>
    </WorkshopsListStyled>
  );
};
