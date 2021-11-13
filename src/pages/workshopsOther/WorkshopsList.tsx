import { Card } from '@material-ui/core';
import DeleteBtn from 'components/DeleteBtn';
import EditBtn from 'components/EditBtn';
import styled from 'styled-components';
import { OtherEducationListDTO } from 'types/DTO/OtherEducation';
import { WorkshopsListHeader } from './WorkshopsListHeader';

const WorkshopsListStyled = styled.div`
  padding: 16px;

  .grid-workshops {
    display: grid;
    grid-template-columns: 1fr 56px 56px;
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
  // const [meeting, setMeeting] = useState<MeetingDTOShort | null>(null);
  // const { deleteItem } = useMeetingCRUD();
  // const { open, openDrawer, closeDrawer } = useDrawer();

  const handleDeleteMeeting = async (id: string) => {
    //   await deleteItem(id);
    //   fetchMeetings();
  };
  return (
    <WorkshopsListStyled>
      <WorkshopsListHeader />
      {workshops.map((workshop) => (
        <Card key={workshop.IdEducation} className="grid-workshops row">
          <p>{workshop.Name}</p>
          <EditBtn
            onClick={() => {
              // setMeeting(mapMeetingToShort(meeting));
              // openDrawer();
            }}
          />

          <DeleteBtn
            onClick={() => handleDeleteMeeting(workshop.IdEducation)}
          />
        </Card>
      ))}

      {/* <Drawer anchor="right" open={open} onClose={closeDrawer}>
          <MeetingFieldset
            closeDrawer={closeDrawer}
            fetchMeetings={fetchMeetings}
            meeting={meeting}
          />
        </Drawer> */}
    </WorkshopsListStyled>
  );
};
