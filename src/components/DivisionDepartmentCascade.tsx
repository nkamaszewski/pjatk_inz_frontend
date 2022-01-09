import { DIRECTOR_ID_ROLE } from 'pages/employment/useEmploymentForm';
import { useEffect } from 'react';
import DepartmentSelect, {
  DepartmentSelectProps,
} from './controls_UI/departmentSelect/DepartmentSelect';
import DivisionSelect, {
  DivisionSelectProps,
} from './controls_UI/divisionSelect/DivisionSelect';

interface DivisionDepartmentCascadeProps {
  divisionProps: DivisionSelectProps;
  departmentProps: DepartmentSelectProps;
  idRole: string;
}

export const DivisionDepartmentCascade = ({
  divisionProps,
  departmentProps,
  idRole,
}: DivisionDepartmentCascadeProps) => {
  const onChangeDivision = (id: string) => {
    divisionProps.onChange(id);
    departmentProps.onChange('');
  };

  useEffect(() => {
    if (idRole?.toString() === DIRECTOR_ID_ROLE) {
      departmentProps.onChange('');
    }
    // eslint-disable-next-line
  }, [idRole]);

  return (
    <>
      <DivisionSelect {...divisionProps} onChange={onChangeDivision} />
      <DepartmentSelect
        {...departmentProps}
        idDivision={divisionProps.value}
        disabled={
          idRole?.toString() === DIRECTOR_ID_ROLE || !divisionProps.value
        }
      />
    </>
  );
};
