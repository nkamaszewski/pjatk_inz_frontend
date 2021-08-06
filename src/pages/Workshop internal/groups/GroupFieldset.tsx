import styled from 'styled-components';
import GroupContent from './GroupContent';

const GroupFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchGroups: Function;
}

const GroupFieldset = ({ closeDrawer, fetchGroups }: Props) => {
  return (
    <GroupFieldsetStyle>
      <GroupContent closeDrawer={closeDrawer} fetchGroups={fetchGroups} />
    </GroupFieldsetStyle>
  );
};

export default GroupFieldset;
