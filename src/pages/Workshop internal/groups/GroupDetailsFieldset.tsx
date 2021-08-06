import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  getEmployeeGroup,
  postEmployeeGroup,
} from '../../../api/EmployeeGroup';
import EmployeeSeelect from '../../../components/controls_UI/EmployeeSeelect';
import { EmployeeGroupDTO } from '../../../types/DTO/EmployeeGroup';
import { GroupDTO } from '../../../types/DTO/Group';

const GroupDetailsFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  group: GroupDTO;
}

const GroupDetailsFieldset = ({ closeDrawer, group }: Props) => {
  const [employeeGroup, setEmployeeGroup]: [EmployeeGroupDTO[], Function] =
    useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [idPerson, setIdPerson] = useState('');

  const fetchEmployeeGroup = () => {
    try {
      getEmployeeGroup().then((res) => {
        const newEmployeeGroup = res.data.filter(
          (eg: EmployeeGroupDTO) => eg.IdGroup === group.IdGroup
        );
        setEmployeeGroup(newEmployeeGroup);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchEmployeeGroup();
  }, []);

  const handleOnCancel = () => {
    setAddingMode(false);
    setIdPerson('');
  };

  const handleOnConfirm = () => {
    try {
      postEmployeeGroup({ IdGroup: group.IdGroup, IdPerson: idPerson }).then(
        (res) => {
          setAddingMode(false);
          fetchEmployeeGroup();
        }
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIdPerson('');
    }
  };

  return (
    <GroupDetailsFieldsetStyle>
      <Fab color="primary" aria-label="add" onClick={() => setAddingMode(true)}>
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>Przypisz pracownika do grupy</DialogTitle>
        <DialogContent>
          <EmployeeSeelect value={idPerson} onChange={setIdPerson} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
      <h3>Pracownicy grupy {group.Name}:</h3>
      {employeeGroup.map((eg) => (
        <Card key={eg.IdEmployeeGroup} className="grid-group row">
          <p>{eg.employeeGroupEmployee.employeePerson.FirstName}</p>
          <p>{eg.employeeGroupEmployee.employeePerson.LastName}</p>
        </Card>
      ))}
    </GroupDetailsFieldsetStyle>
  );
};

export default GroupDetailsFieldset;
