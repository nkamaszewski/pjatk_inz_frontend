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
import { useLanguage } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  deleteEmployeeGroup,
  getEmployeeGroup,
  postEmployeeGroup,
} from '../../api/EmployeeGroup';
import GroupSelect from '../../components/controls_UI/groupSelect/GroupSelect';
import DeleteBtn from '../../components/DeleteBtn';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { EmployeeGroupDTO } from '../../types/DTO/EmployeeGroup';
import { PersonDTO } from '../../types/DTO/Person';

const EmployeeDetailsFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
  .header {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .grid-group {
    padding: 16px;
    margin: 4px 0;
    display: grid;
    grid-template-columns: 200px 1fr 56px;
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
  const { setSnackbar } = useSnackbar();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteEmployeeGroup(id);
      fetchEmployeeGroup();
      setSnackbar(createSnackbarSuccess('usunięto przypisanie do grupy'));
    } catch (error) {
      console.error(error);
    }
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <EmployeeDetailsFieldsetStyle>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.assignAnEmployeeToAGroup}</DialogTitle>
        <DialogContent>
          <GroupSelect value={idGroup} onChange={setIdGroup} />
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
          {schema.groupsToWhichItBelongs} {person.FirstName} {person.LastName}:
        </h3>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setAddingMode(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <header className="grid-group">
        <p>{schema.name}</p>
        <p>{schema.cardinality}</p>
      </header>
      {employeeGroup.map((eg) => (
        <Card key={eg.IdEmployeeGroup} className="grid-group">
          <p>{eg.employeeGroupGroup.Name}</p>
          <p>{eg.employeeGroupGroup.NumberOfPerson}</p>
          <DeleteBtn onClick={() => handleDeleteItem(eg.IdEmployeeGroup)} />
        </Card>
      ))}
    </EmployeeDetailsFieldsetStyle>
  );
};

export default EmployeeDetailsFieldset;
