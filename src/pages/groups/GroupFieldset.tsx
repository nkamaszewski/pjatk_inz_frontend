import { useLanguage } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import GroupContent from './GroupContent';

interface Props {
  closeDrawer: () => void;
  fetchGroups: Function;
}

const GroupFieldset = ({ closeDrawer, fetchGroups }: Props) => {
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FieldsetStyled>
      <HeaderFieldset title={schema.addGroup} closeDrawer={closeDrawer} />
      <GroupContent closeDrawer={closeDrawer} fetchGroups={fetchGroups} />
    </FieldsetStyled>
  );
};

export default GroupFieldset;
