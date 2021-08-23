import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { RoomDTO } from '../../types/DTO/Room';
import RoomContent from './RoomContent';

interface Props {
  closeDrawer: () => void;
  fetchRooms: Function;
  editRoom?: RoomDTO | null;
}

const RoomFieldset = ({ closeDrawer, fetchRooms, editRoom }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editRoom ? 'Edytuj' : 'Dodaj'} salę`}
        closeDrawer={closeDrawer}
      />
      <RoomContent
        closeDrawer={closeDrawer}
        fetchRooms={fetchRooms}
        editRoom={editRoom}
      />
    </FieldsetStyled>
  );
};

export default RoomFieldset;
