import { Divider, Drawer } from '@material-ui/core';
import { useDeleteDepartmentMutation } from 'api/department/useDeleteDepartmentMutation';
import { useDeleteDivisionMutation } from 'api/division/useDeleteDivisionMutation';
import { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { DepartmentDTO } from '../../types/DTO/Department';
import { DivisionDTO } from '../../types/DTO/Division';
import DepartmentFieldset from './DepartmentFieldset';
import DivisionFieldset from './DivisionFieldset';

const DepartmentsDivisionsListStyle = styled.div`
  padding: 24px;

  .grid-list {
    display: grid;
    grid-template-columns: 1fr 56px 56px;
  }

  .department-list {
    padding-right: 132px;
  }

  p {
    margin: 8px 0;
  }
`;

interface Props {
  divisions: DivisionDTO[];
}

export const DepartmentsDivisionsList = ({ divisions }: Props) => {
  const [editDivision, setEditDivision]: [DivisionDTO | null, Function] =
    useState(null);
  const [editDepartment, setEditDepartment]: [DepartmentDTO | null, Function] =
    useState(null);
  const deleteDivisionMutation = useDeleteDivisionMutation();
  const deleteDepartmentMutation = useDeleteDepartmentMutation();

  const handleCloseDivisionDrawer = () => setEditDivision(null);
  const handleCloseDepartmentDrawer = () => setEditDepartment(null);

  return (
    <DepartmentsDivisionsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editDivision)}
        onClose={handleCloseDivisionDrawer}
      >
        <DivisionFieldset
          closeDrawer={handleCloseDivisionDrawer}
          editDivision={editDivision}
        />
      </Drawer>
      <Drawer
        anchor="right"
        open={Boolean(editDepartment)}
        onClose={handleCloseDepartmentDrawer}
      >
        <DepartmentFieldset
          closeDrawer={handleCloseDepartmentDrawer}
          editDepartment={editDepartment}
        />
      </Drawer>
      {divisions.map((division) => (
        <div key={division.IdDivision}>
          <div className="grid-list">
            <h3>{division.Name}</h3>
            <EditBtn onClick={() => setEditDivision(division)} />
            <DeleteBtn
              onClick={() =>
                deleteDivisionMutation.mutate({ id: division.IdDivision })
              }
            />
          </div>
          {division.divisionDepartments
            .filter(
              (department) => department.IdDivision === division.IdDivision
            )
            .map((department) => (
              <div className="grid-list department-list">
                <p key={department.IdDepartment}>{department.Name}</p>
                <EditBtn onClick={() => setEditDepartment(department)} />
                <DeleteBtn
                  onClick={() =>
                    deleteDepartmentMutation.mutate({
                      id: department.IdDepartment,
                    })
                  }
                />
              </div>
            ))}
          <Divider />
        </div>
      ))}
    </DepartmentsDivisionsListStyle>
  );
};
