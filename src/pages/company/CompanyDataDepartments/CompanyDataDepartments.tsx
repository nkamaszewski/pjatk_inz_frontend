import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDepartments, getDivisions } from '../../../api/apiRoutes';
import PageHeader from '../../../components/PageHeader';
import { Department } from '../../../types/DTO/Department';
import { Division } from '../../../types/DTO/Division';
import DataDepartmentsList from './DataDepartmentsList';

const CompanyDataDepartmentsStyle = styled.div``;

const CompanyDataDepartments = () => {
  const [divisions, setDivisions]: [Division[], Function] = useState([]);
  const [departments, setDepartments]: [Department[], Function] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <CompanyDataDepartmentsStyle>
      <PageHeader title="Firma piony wydziały" />
      <DataDepartmentsList divisions={divisions} departments={departments} />
    </CompanyDataDepartmentsStyle>
  );
};

export default CompanyDataDepartments;
