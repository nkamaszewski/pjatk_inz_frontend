import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import { DepartmentDTO } from '../../../types/DTO/Department';
import { DivisionDTO } from '../../../types/DTO/Division';

const DataDepartmentsListStyle = styled.div`
  padding: 24px;

  p {
    margin: 8px 0;
  }
`;

interface Props {
  divisions: DivisionDTO[];
  departments: DepartmentDTO[];
}

const DataDepartmentsList = ({ divisions, departments }: Props) => {
  return (
    <DataDepartmentsListStyle>
      {divisions.map((division) => (
        <div key={division.IdDivision}>
          <h3>{division.Name}</h3>
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
