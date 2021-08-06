import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { GroupDTO } from '../../../types/DTO/Group';
import GroupListHeader from './GroupListHeader';

const GroupListStyle = styled.div`
  padding: 16px;

  .grid-group {
    display: grid;
    grid-template-columns: 1fr 300px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  groups: GroupDTO[];
}

const GroupList = ({ groups }: Props) => {
  return (
    <GroupListStyle>
      <GroupListHeader />
      {groups.map((group) => (
        <Card key={group.IdGroup} className="grid-group row">
          <p>{group.Name}</p>
          <p>{group.NumberOfPerson}</p>
        </Card>
      ))}
    </GroupListStyle>
  );
};

export default GroupList;
