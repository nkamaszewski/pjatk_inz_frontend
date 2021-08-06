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
import { getEmployeeGroup, postEmployeeGroup } from '../../api/EmployeeGroup';

import { getGroups } from '../../api/Group';
import GroupSelect from '../../components/controls_UI/GroupSelect';
import { EmployeeGroupDTO } from '../../types/DTO/EmployeeGroup';
import { PersonDTO } from '../../types/DTO/Person';

const EmployeeDetailsFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
  .header {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
    display: grid;
    grid-template-columns: 200px 200px;
  }
`;

interface Props {
  closeDrawer: Function;
  person: PersonDTO;
}

const EmployeeDetailsFieldset = ({ closeDrawer, person }: Props) => {
  const [employeeGroup, setEmployeeGroup]: [EmployeeGroupDTO[], Function] =
    useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [idGroup, setIdGroup] = useState('');

  const fetchEmployeeGroup = () => {
    try {
      getEmployeeGroup().then((res) => {
        const newEmployeeGroup = res.data.filter(
          (eg: EmployeeGroupDTO) =>
            eg.employeeGroupEmployee.IdPerson === person.IdPerson
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
    setIdGroup('');
  };

  const handleOnConfirm = () => {
    try {
      postEmployeeGroup({ IdGroup: idGroup, IdPerson: person.IdPerson }).then(
        (res) => {
          setAddingMode(false);
          fetchEmployeeGroup();
        }
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIdGroup('');
    }
  };

  return (
    <EmployeeDetailsFieldsetStyle>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>Przypisz pracownika do grupy</DialogTitle>
        <DialogContent>
          <GroupSelect value={idGroup} onChange={setIdGroup} />
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
      <div className="header">
        <h3>
          Grupy do których należy {person.FirstName} {person.LastName}:
        </h3>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setAddingMode(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      {employeeGroup.map((eg) => (
        <Card key={eg.IdEmployeeGroup} className="grid-group row">
          <p>{eg.employeeGroupGroup.Name}</p>
          <p>{eg.employeeGroupGroup.NumberOfPerson}</p>
        </Card>
      ))}
    </EmployeeDetailsFieldsetStyle>
  );
};

export default EmployeeDetailsFieldset;
