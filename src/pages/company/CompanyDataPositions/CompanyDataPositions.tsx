import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../../components/PageHeader';
import { Position } from '../../../types/DTO/Position';

const CompanyDataPositionsStyle = styled.div``;

const CompanyDataPositions = () => {
  const [positions, setPositions]: [Position[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchDivisionsDepartments = () => {
    try {
      // getDivisions().then((res) => {
      //   setDivisions(res.data);
      // });
      // getDepartments().then((res) => {
      //   setDepartments(res.data);
      // });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchDivisionsDepartments();
  }, []);

  return (
    <CompanyDataPositionsStyle>
      <PageHeader title="Firma stanowiska" />
      <div className="toolbar--global">
        <Fab color="primary" aria-label="add" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        {/* <DepartmentDivisionFieldset
          divisions={divisions}
          closeDrawer={() => setIsOpen(false)}
          fetchDivisionsDepartments={fetchDivisionsDepartments}
        /> */}
      </Drawer>
      {/* <DataDepartmentsList divisions={divisions} departments={departments} /> */}
    </CompanyDataPositionsStyle>
  );
};

export default CompanyDataPositions;
