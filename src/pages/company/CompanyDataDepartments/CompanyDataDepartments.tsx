import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDepartments, getDivisions } from '../../../api/apiRoutes';
import PageHeader from '../../../components/PageHeader';
import { DepartmentDTO } from '../../../types/DTO/Department';
import { DivisionDTO } from '../../../types/DTO/Division';
import DataDepartmentsList from './DataDepartmentsList';
import DepartmentDivisionFieldset from './DepartmentDivisionFieldset';

const CompanyDataDepartmentsStyle = styled.div``;

const CompanyDataDepartments = () => {
  const [divisions, setDivisions]: [DivisionDTO[], Function] = useState([]);
  const [departments, setDepartments]: [DepartmentDTO[], Function] = useState(
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const fetchDivisionsDepartments = () => {
    try {
      getDivisions().then((res) => {
        setDivisions(res.data);
      });
      getDepartments().then((res) => {
        setDepartments(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchDivisionsDepartments();
  }, []);

  return (
    <CompanyDataDepartmentsStyle>
      <PageHeader title="Firma piony wydziały" />
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <DepartmentDivisionFieldset
          divisions={divisions}
          closeDrawer={() => setIsOpen(false)}
          fetchDivisionsDepartments={fetchDivisionsDepartments}
        />
      </Drawer>
      <DataDepartmentsList divisions={divisions} departments={departments} />
    </CompanyDataDepartmentsStyle>
  );
};

export default CompanyDataDepartments;
