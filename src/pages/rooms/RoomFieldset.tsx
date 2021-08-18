import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import RoomContent from './RoomContent';

interface Props {
  closeDrawer: () => void;
  fetchRooms: Function;
}

const RoomFieldset = ({ closeDrawer, fetchRooms }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj Salę`} closeDrawer={closeDrawer} />
      <RoomContent closeDrawer={closeDrawer} fetchRooms={fetchRooms} />
    </FieldsetStyled>
  );
};

export default RoomFieldset;
