import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import styled from 'styled-components';
import { GroupDTO } from '../../../types/DTO/Group';
import GroupDetailsFieldset from './GroupDetailsFieldset';
import GroupListHeader from './GroupListHeader';

const GroupListStyle = styled.div`
  padding: 16px;

  .grid-group {
    display: grid;
    grid-template-columns: 1fr 300px 44px;
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
  const [isOpen, setIsOpen] = useState(false);
  const [group, setGroup] = useState({} as GroupDTO);
  return (
    <GroupListStyle>
      <GroupListHeader />
      {groups.map((group) => (
        <Card key={group.IdGroup} className="grid-group row">
          <p>{group.Name}</p>
          <p>{group.NumberOfPerson}</p>
          <Button
            onClick={() => {
              setGroup(group);
              setIsOpen(true);
            }}
          >
            <FontAwesomeIcon icon={faSitemap} />
          </Button>
        </Card>
      ))}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <GroupDetailsFieldset
          closeDrawer={() => setIsOpen(false)}
          group={group}
        />
      </Drawer>
    </GroupListStyle>
  );
};

export default GroupList;
