import { Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
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
  closeDrawer: Function;
  fetchDivisionsDepartments: Function;
}

const DepartmentDivisionFieldset = ({
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
      {selectedTab === WYDZIAL && <div className="content">wydzial</div>}
    </DepartmentDivisionFieldsetStyle>
  );
};

export default DepartmentDivisionFieldset;
