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
import { getPersons } from '../../../api/Person';
import EmployeeSeelect from '../../../components/controls_UI/EmployeeSeelect';
import { EmployeeGroupDTO } from '../../../types/DTO/EmployeeGroup';
import { GroupDTO } from '../../../types/DTO/Group';
import { PersonDTO } from '../../../types/DTO/Person';

const GroupDetailsFieldsetStyle = styled.div`
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
  group: GroupDTO;
}

const GroupDetailsFieldset = ({ closeDrawer, group }: Props) => {
  const [employeeGroup, setEmployeeGroup]: [EmployeeGroupDTO[], Function] =
    useState([]);
  const [persons, setPersons] = useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [idPerson, setIdPerson] = useState('');

  const fetchEmployeeGroup = () => {
    try {
      getPersons().then((res) => {
        setPersons(res.data);
      });
      getEmployeeGroup().then((res) => {
        const newEmployeeGroup = res.data.filter(
          (eg: EmployeeGroupDTO) =>
            eg.employeeGroupGroup.IdGroup === group.IdGroup
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

  const getPersonDisplayData = (eg: EmployeeGroupDTO) => {
    const person = persons.find(
      (p: PersonDTO) => p.IdPerson === eg.employeeGroupEmployee.IdPerson
    );
    return person ?? ({} as PersonDTO);
  };

  return (
    <GroupDetailsFieldsetStyle>
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
      <div className="header">
        <h3>Pracownicy grupy {group.Name}:</h3>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setAddingMode(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      {employeeGroup.map((eg) => {
        const person = getPersonDisplayData(eg);
        return (
          <Card key={eg.IdEmployeeGroup} className="grid-group row">
            <p>{person.FirstName}</p>
            <p>{person.LastName}</p>
          </Card>
        );
      })}
    </GroupDetailsFieldsetStyle>
  );
};

export default GroupDetailsFieldset;
