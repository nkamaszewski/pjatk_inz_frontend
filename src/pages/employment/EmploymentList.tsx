import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer, Tooltip } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDivisions } from '../../api/Division';
import { deleteEmployment } from '../../api/Employment';
import { getPersons } from '../../api/Person';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { DivisionDTO } from '../../types/DTO/Division';
import {
  EmploymentDTO,
  EmploymentListDTO,
  mapEmploymentListDTOtoEmploymentDTO,
} from '../../types/DTO/Employment';
import { PersonDTO } from '../../types/DTO/Person';
import EmployeeDetailsFieldset from './EmployeeDetailsFieldset';
import EmploymentFieldset from './EmploymentFieldset';
import EmploymentListHeader from './EmploymentListHeader';

const EmploymentListStyle = styled.div`
  padding: 16px;

  .grid-employment {
    display: grid;
    grid-template-columns: repeat(5, 1fr) repeat(3, 44px);
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  employees: EmploymentListDTO[];
  divisions: DivisionDTO[];
  persons: PersonDTO[];
  fetchEmployments: () => void;
}

const EmploymentList = ({
  employees,
  divisions,
  persons,
  fetchEmployments,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [person, setPerson] = useState({} as PersonDTO);
  const [editEmployee, setEditEmployee] = useState<EmploymentDTO | null>(null);

  const getDivisionName = (employee: EmploymentListDTO) => {
    const div = divisions.find(
      (division: DivisionDTO) =>
        division.IdDivision === employee.employmentsDepartment.IdDivision
    );
    return div ? (div as DivisionDTO).Name : '';
  };

  const getPersonDisplayData = (employee: EmploymentListDTO) => {
    const person = persons.find(
      (p: PersonDTO) => p.IdPerson === employee.IdPerson
    );
    return person ?? ({} as PersonDTO);
  };

  const deleteEmployee = async (id: string) => {
    try {
      await deleteEmployment(id);
      fetchEmployments();
    } catch (e) {
      console.error(e);
    }
  };

  const handleCloseDrawer = () => setEditEmployee(null);

  return (
    <EmploymentListStyle>
      <EmploymentListHeader />
      {employees.map((employee) => {
        const person = getPersonDisplayData(employee);
        return (
          <Card key={employee.IdEmployment} className="grid-employment row">
            <p>{person.FirstName}</p>
            <p>{person.LastName}</p>
            <p>{getDivisionName(employee)}</p>
            <p>{employee.employmentsDepartment.Name}</p>
            <p>{employee.emplymentPosition.Name}</p>
            <EditBtn
              onClick={() =>
                setEditEmployee(mapEmploymentListDTOtoEmploymentDTO(employee))
              }
            />
            <DeleteBtn onClick={() => deleteEmployee(employee.IdEmployment)} />
            <Tooltip title="grupa">
              <Button
                onClick={() => {
                  setPerson(person);
                  setIsOpen(true);
                }}
              >
                <FontAwesomeIcon className="g-primary-color" icon={faSitemap} />
              </Button>
            </Tooltip>
          </Card>
        );
      })}
      <Drawer
        anchor="right"
        open={Boolean(editEmployee)}
        onClose={handleCloseDrawer}
      >
        <EmploymentFieldset
          closeDrawer={handleCloseDrawer}
          fetchEmployments={fetchEmployments}
          editEmployee={editEmployee}
        />
      </Drawer>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <EmployeeDetailsFieldset
          closeDrawer={() => setIsOpen(false)}
          person={person}
        />
      </Drawer>
    </EmploymentListStyle>
  );
};

export default EmploymentList;
