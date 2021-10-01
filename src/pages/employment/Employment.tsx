import { Drawer } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import { getDivisions } from '../../api/Division';
import { getEmployments } from '../../api/Employment';
import { getPersons } from '../../api/Person';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { EmploymentListDTO } from '../../types/DTO/Employment';
import EmploymentFieldset from './EmploymentFieldset';
import EmploymentList from './EmploymentList';

const Employment = () => {
  const [employees, setEmployees]: [EmploymentListDTO[], Function] = useState(
    []
  );
  const [divisions, setDivisions] = useState([]);
  const [persons, setPersons] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    language: { schema },
  } = useLanguage();

  const fetchDivisions = () => {
    try {
      getDivisions().then((res) => {
        setDivisions(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const fetchPersons = () => {
    try {
      getPersons().then((res) => {
        setPersons(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const fetchEmployments = () => {
    try {
      getEmployments().then((res) => {
        setEmployees(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const fetchEmploymentsWithPersonsAndDivisions = () => {
    fetchPersons();
    fetchDivisions();
    fetchEmployments();
  };

  useEffect(() => {
    fetchEmploymentsWithPersonsAndDivisions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageHeader title={schema.employees} />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <EmploymentFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchEmployments={fetchEmploymentsWithPersonsAndDivisions}
        />
      </Drawer>
      <EmploymentList
        employees={employees}
        divisions={divisions}
        persons={persons}
        fetchEmployments={fetchEmploymentsWithPersonsAndDivisions}
      />
    </div>
  );
};

export default Employment;
