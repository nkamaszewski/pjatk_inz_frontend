import { useLanguageSchema } from 'providers/LanguageProvider';
import { GroupDTO } from 'types/DTO/Group';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import GroupContent from './GroupContent';

interface Props {
  closeDrawer: () => void;
  editedGroup?: GroupDTO | null;
}

const GroupFieldset = ({ closeDrawer, editedGroup }: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset title={schema.addGroup} closeDrawer={closeDrawer} />
      <GroupContent closeDrawer={closeDrawer} editedGroup={editedGroup} />
    </FieldsetStyled>
  );
};

export default GroupFieldset;
