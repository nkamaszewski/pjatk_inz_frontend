import { Tab, Tabs } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
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
  closeDrawer: Function;
}

const DepartmentDivisionFieldset = ({ closeDrawer }: Props) => {
  const [selectedTab, setSelectedTab] = useState(PION);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };
  const schema = useLanguageSchema();

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
        <Tab label={schema.addDepartment} className="tab" />
        <Tab label={schema.addDivision} className="tab" />
      </Tabs>

      {selectedTab === PION && <DivisionContent closeDrawer={closeDrawer} />}
      {selectedTab === WYDZIAL && (
        <DepartmentContent closeDrawer={closeDrawer} />
      )}
    </DepartmentDivisionFieldsetStyle>
  );
};

export default DepartmentDivisionFieldset;
