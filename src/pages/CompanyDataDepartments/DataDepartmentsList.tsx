import { Divider, Drawer } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteDivision } from '../../api/Division';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
import { DepartmentDTO } from '../../types/DTO/Department';
import { DivisionDTO } from '../../types/DTO/Division';
import DivisionFieldset from './DivisionFieldset';

const DataDepartmentsListStyle = styled.div`
  padding: 24px;

  .grid-list {
    display: grid;
    grid-template-columns: 1fr 56px 56px;
  }

  p {
    margin: 8px 0;
  }
`;

interface Props {
  divisions: DivisionDTO[];
  departments: DepartmentDTO[];
  fetchDivisionsDepartments: () => void;
}

const DataDepartmentsList = ({
  divisions,
  departments,
  fetchDivisionsDepartments,
}: Props) => {
  const [editDivision, setEditDivision]: [DivisionDTO | null, Function] =
    useState(null);
  const { setSnackbar } = useSnackbar();
  const handleCloseDrawer = () => setEditDivision(null);
  const handleDeleteDivision = async (id: string) => {
    try {
      await deleteDivision(id);
      fetchDivisionsDepartments();
      setSnackbar(createSnackbarSuccess('usunięto pion'));
    } catch (e) {
      setSnackbar(createSnackbarError('nie udało się usunąć pionu!'));
    }
  };
  return (
    <DataDepartmentsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editDivision)}
        onClose={handleCloseDrawer}
      >
        <DivisionFieldset
          closeDrawer={handleCloseDrawer}
          fetchDivisionsDepartments={fetchDivisionsDepartments}
          editDivision={editDivision}
        />
      </Drawer>
      {divisions.map((division) => (
        <div key={division.IdDivision}>
          <div className="grid-list">
            <h3>{division.Name}</h3>
            <EditBtn onClick={() => setEditDivision(division)} />
            <DeleteBtn
              onClick={() => handleDeleteDivision(division.IdDivision)}
            />
          </div>
          {departments
            .filter(
              (department) => department.IdDivision === division.IdDivision
            )
            .map((department) => (
              <p key={department.IdDepartment}>{department.Name}</p>
            ))}
          <Divider />
        </div>
      ))}
    </DataDepartmentsListStyle>
  );
};

export default DataDepartmentsList;
