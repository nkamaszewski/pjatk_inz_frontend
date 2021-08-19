import { Drawer } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDepartments } from '../../api/Department';
import { getDivisions } from '../../api/Division';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import { DepartmentDTO } from '../../types/DTO/Department';
import { DivisionDTO } from '../../types/DTO/Division';
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
      <AddFab onClick={() => setIsOpen(true)} />
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