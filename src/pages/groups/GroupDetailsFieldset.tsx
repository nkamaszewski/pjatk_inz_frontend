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
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  deleteEmployeeGroup,
  getEmployeeGroup,
  postEmployeeGroup,
} from '../../api/EmployeeGroup';
import { getPersons } from '../../api/Person';
import { EmployeeSelect } from '../../components/controls_UI/employeeSelect/EmployeeSelect';
import DeleteBtn from '../../components/DeleteBtn';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { EmployeeGroupDTO } from '../../types/DTO/EmployeeGroup';
import { GroupDTO } from '../../types/DTO/Group';
import { PersonDTO } from '../../types/DTO/Person';

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
    grid-template-columns: 200px 1fr 56px;
  }
`;

interface Props {
  closeDrawer: Function;
  group: GroupDTO;
}

const GroupDetailsFieldset = ({ closeDrawer, group }: Props) => {
  const [employeeGroup, setEmployeeGroup]: [EmployeeGroupDTO[], Function] =
    useState([]);
  const [persons, setPersons] = useState<PersonDTO[]>([]);
  const [addingMode, setAddingMode] = useState(false);
  const [idPerson, setIdPerson] = useState('');
  const { setSnackbar } = useSnackbar();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteEmployeeGroup(id);
      fetchEmployeeGroup();
      setSnackbar(createSnackbarSuccess('usunięto z grupy'));
    } catch (e) {
      setSnackbar(createSnackbarError('nie udało się usunąć z grupy!'));
    }
  };

  const getPersonDisplayData = (eg: EmployeeGroupDTO) => {
    const person = persons.find(
      (p: PersonDTO) => p.IdPerson === eg.employeeGroupEmployee.IdPerson
    );
    return person ?? ({} as PersonDTO);
  };
  const schema = useLanguageSchema();

  return (
    <GroupDetailsFieldsetStyle>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.assignAnEmployeeToAGroup}</DialogTitle>
        <DialogContent>
          <EmployeeSelect value={idPerson} onChange={setIdPerson} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            {schema.cancel}
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            {schema.add}
          </Button>
        </DialogActions>
      </Dialog>
      <div className="header">
        <h3>
          {schema.groupEmployees} {group.Name}:
        </h3>
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
            <DeleteBtn onClick={() => handleDeleteItem(eg.IdEmployeeGroup)} />
          </Card>
        );
      })}
    </GroupDetailsFieldsetStyle>
  );
};

export default GroupDetailsFieldset;
