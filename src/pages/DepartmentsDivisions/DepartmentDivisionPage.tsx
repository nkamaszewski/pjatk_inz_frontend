import { Drawer } from '@material-ui/core';
import { useDivisionQuery } from 'api/division/useDivisionQuery';
import { NoData } from 'components/NoData';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import AddFab from '../../components/AddFab';
import PageHeader from '../../components/PageHeader';
import DepartmentDivisionFieldset from './DepartmentDivisionFieldset';
import { DepartmentsDivisionsList } from './DepartmentsDivisionsList';

const DepartmentDivisionPageStyle = styled.div``;

export const DepartmentDivisionPage = () => {
  const divisionsQuery = useDivisionQuery();
  const { open, openDrawer, closeDrawer } = useDrawer();
  const schema = useLanguageSchema();

  return (
    <DepartmentDivisionPageStyle>
      <PageHeader title={schema.departmentsDivisions} />
      <AddFab onClick={openDrawer} />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <DepartmentDivisionFieldset closeDrawer={closeDrawer} />
      </Drawer>
      {divisionsQuery.data?.data.length ? (
        <DepartmentsDivisionsList divisions={divisionsQuery.data.data} />
      ) : (
        <NoData />
      )}
    </DepartmentDivisionPageStyle>
  );
};
