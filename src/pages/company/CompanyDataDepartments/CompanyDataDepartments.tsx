import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDepartments, getDivisions } from '../../../api/apiRoutes';
import PageHeader from '../../../components/PageHeader';
import { Department } from '../../../types/DTO/Department';
import { Division } from '../../../types/DTO/Division';
import DataDepartmentsList from './DataDepartmentsList';
import DepartmentDivisionFieldset from './DepartmentDivisionFieldset';

const CompanyDataDepartmentsStyle = styled.div`
  .toolbar {
    padding: 36px;
    width: calc(100% - 72px);
    display: flex;
    flex-direction: row-reverse;
  }
`;

const CompanyDataDepartments = () => {
  const [divisions, setDivisions]: [Division[], Function] = useState([]);
  const [departments, setDepartments]: [Department[], Function] = useState([]);
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
      <div className="toolbar">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <DepartmentDivisionFieldset
          closeDrawer={() => setIsOpen(false)}
          fetchDivisionsDepartments={fetchDivisionsDepartments}
        />
      </Drawer>
      <DataDepartmentsList divisions={divisions} departments={departments} />
    </CompanyDataDepartmentsStyle>
  );
};

export default CompanyDataDepartments;
