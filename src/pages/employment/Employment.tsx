import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getEmployments } from '../../api/Employment';
import PageHeader from '../../components/PageHeader';
import { EmploymentListDTO } from '../../types/DTO/Employment';
import EmploymentFieldset from './EmploymentFieldset';
import EmploymentList from './EmploymentList';

const Employment = () => {
  const [employees, setEmployees]: [EmploymentListDTO[], Function] = useState(
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const fetchEmployments = () => {
    try {
      getEmployments().then((res) => {
        setEmployees(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchEmployments();
  }, []);

  return (
    <div>
      <PageHeader title="Pracownicy" />
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <EmploymentFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchEmployments={fetchEmployments}
        />
      </Drawer>
      <EmploymentList employees={employees} />
    </div>
  );
};

export default Employment;
