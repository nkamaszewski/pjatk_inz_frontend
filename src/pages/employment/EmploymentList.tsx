import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDivisions } from '../../api/Division';
import { getPersons } from '../../api/Person';
import { DivisionDTO } from '../../types/DTO/Division';
import { EmploymentListDTO } from '../../types/DTO/Employment';
import { PersonDTO } from '../../types/DTO/Person';
import EmployeeDetailsFieldset from './EmployeeDetailsFieldset';
import EmploymentListHeader from './EmploymentListHeader';

const EmploymentListStyle = styled.div`
  padding: 16px;

  .grid-employment {
    display: grid;
    grid-template-columns: repeat(5, 1fr) 44px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  employees: EmploymentListDTO[];
}

const EmploymentList = ({ employees }: Props) => {
  const [divisions, setDivisions] = useState([]);
  const [persons, setPersons] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [person, setPerson] = useState({} as PersonDTO);

  useEffect(() => {
    try {
      getDivisions().then((res) => {
        setDivisions(res.data);
      });
      getPersons().then((res) => {
        setPersons(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

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
            <Button
              onClick={() => {
                setPerson(person);
                setIsOpen(true);
              }}
            >
              <FontAwesomeIcon icon={faSitemap} />
            </Button>
          </Card>
        );
      })}
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
