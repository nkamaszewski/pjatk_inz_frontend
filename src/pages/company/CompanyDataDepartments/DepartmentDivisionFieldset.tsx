import { Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { DivisionDTO } from '../../../types/DTO/Division';
import DepartmentContent from './DepartmentContent';
import DivisionContent from './DivisionContent';

const PION = 0;
const WYDZIAL = 1;

const DepartmentDivisionFieldsetStyle = styled.div`
  padding: 24px;

  width: 600px;
  .tab {
    font-weight: bold;
  }
`;

interface Props {
  divisions: DivisionDTO[];
  closeDrawer: Function;
  fetchDivisionsDepartments: Function;
}

const DepartmentDivisionFieldset = ({
  divisions,
  closeDrawer,
  fetchDivisionsDepartments,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(PION);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <DepartmentDivisionFieldsetStyle>
      <Tabs
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        className="tabs"
      >
        <Tab label="Dodaj Pion" className="tab" />
        <Tab label="Dodaj Wydział" className="tab" />
      </Tabs>

      {selectedTab === PION && (
        <DivisionContent
          closeDrawer={closeDrawer}
          fetchDivisionsDepartments={fetchDivisionsDepartments}
        />
      )}
      {selectedTab === WYDZIAL && (
        <DepartmentContent
          divisions={divisions}
          closeDrawer={closeDrawer}
          fetchDivisionsDepartments={fetchDivisionsDepartments}
        />
      )}
    </DepartmentDivisionFieldsetStyle>
  );
};

export default DepartmentDivisionFieldset;
