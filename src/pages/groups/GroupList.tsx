import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useDeleteGroupMutation } from 'api/group/useDeleteGroupMutation';
import EditBtn from 'components/EditBtn';
import { useDrawer } from 'hooks/useDrawer';
import { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import {
  GroupDTO,
  GroupListDTO,
  mapGroupListDTOtoGroupDTO,
} from '../../types/DTO/Group';
import GroupDetailsFieldset from './GroupDetailsFieldset';
import GroupFieldset from './GroupFieldset';
import GroupListHeader from './GroupListHeader';

const GroupListStyle = styled.div`
  padding: 16px;

  .grid-group {
    display: grid;
    grid-template-columns: 1fr 280px 1fr 300px 56px 56px 56px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  groups: GroupListDTO[];
}

const GroupList = ({ groups }: Props) => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const [group, setGroup] = useState({} as GroupListDTO);
  const [editedGroup, setEditedGroup] = useState<GroupDTO | null>(null);
  const deleteMutation = useDeleteGroupMutation();
  const handleCloseDrawer = () => setEditedGroup(null);
  return (
    <GroupListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editedGroup)}
        onClose={handleCloseDrawer}
      >
        <GroupFieldset
          closeDrawer={handleCloseDrawer}
          editedGroup={editedGroup}
        />
      </Drawer>
      <GroupListHeader />
      {groups.map((group) => (
        <Card key={group.IdGroup} className="grid-group row">
          <p>{group.Name}</p>
          <p>{group.NumberOfPerson}</p>
          <p>{group.Topic}</p>
          <p>{group.Subject}</p>
          <Button
            onClick={() => {
              setGroup(group);
              openDrawer();
            }}
          >
            <FontAwesomeIcon className="primary--color" icon={faSitemap} />
          </Button>
          <EditBtn
            onClick={() => setEditedGroup(mapGroupListDTOtoGroupDTO(group))}
          />
          <DeleteBtn
            onClick={() => deleteMutation.mutate({ id: group.IdGroup })}
          />
        </Card>
      ))}
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <GroupDetailsFieldset closeDrawer={closeDrawer} group={group} />
      </Drawer>
    </GroupListStyle>
  );
};

export default GroupList;
