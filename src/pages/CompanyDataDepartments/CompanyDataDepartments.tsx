import { Drawer } from '@material-ui/core';
import { NoData } from 'components/NoData';
import { useLanguageSchema } from 'providers/LanguageProvider';
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

  const schema = useLanguageSchema();

  return (
    <CompanyDataDepartmentsStyle>
      <PageHeader title={schema.departmentsDivisions} />
      <AddFab onClick={() => setIsOpen(true)} />
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <DepartmentDivisionFieldset
          divisions={divisions}
          closeDrawer={() => setIsOpen(false)}
          fetchDivisionsDepartments={fetchDivisionsDepartments}
        />
      </Drawer>
      {divisions.length && departments.length ? (
        <DataDepartmentsList
          divisions={divisions}
          departments={departments}
          fetchDivisionsDepartments={fetchDivisionsDepartments}
        />
      ) : (
        <NoData />
      )}
    </CompanyDataDepartmentsStyle>
  );
};

export default CompanyDataDepartments;
