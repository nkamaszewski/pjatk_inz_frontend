import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import GroupContent from './GroupContent';

interface Props {
  closeDrawer: () => void;
  fetchGroups: Function;
}

const GroupFieldset = ({ closeDrawer, fetchGroups }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Dodaj grupę`} closeDrawer={closeDrawer} />
      <GroupContent closeDrawer={closeDrawer} fetchGroups={fetchGroups} />
    </FieldsetStyled>
  );
};

export default GroupFieldset;
