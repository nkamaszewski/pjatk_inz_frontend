import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
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
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={`${editRoom ? capFL(schema.edit) : schema.add} ${schema.roomV2}`}
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
