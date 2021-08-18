import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { deleteGroup } from '../../api/Group';
import DeleteBtn from '../../components/DeleteBtn';
import { NotificationContext } from '../../contexts/NotificationContext';
import {
  createSnackbarError,
  createSnackbarSuccess,
} from '../../hooks/useNotification';
import { GroupDTO } from '../../types/DTO/Group';
import GroupDetailsFieldset from './GroupDetailsFieldset';
import GroupListHeader from './GroupListHeader';

const GroupListStyle = styled.div`
  padding: 16px;

  .grid-group {
    display: grid;
    grid-template-columns: 1fr 300px 56px 56px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  groups: GroupDTO[];
  fetchGroups: Function;
}

const GroupList = ({ groups, fetchGroups }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [group, setGroup] = useState({} as GroupDTO);
  const notificationCtx = useContext(NotificationContext);

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteGroup(id);
      notificationCtx.setSnackbar(createSnackbarSuccess('Usunięto grupę!'));
      fetchGroups();
    } catch (e) {
      console.error(e);
      notificationCtx.setSnackbar(
        createSnackbarError('Nie udało się usunąć grupy!')
      );
    }
  };

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
            <FontAwesomeIcon className="primary--color" icon={faSitemap} />
          </Button>
          <DeleteBtn onClick={() => handleDeleteItem(group.IdGroup)} />
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
