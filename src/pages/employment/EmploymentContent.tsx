import { Button, TextField } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getEmployee, postEmployee } from '../../api/Employee';
import DepartmentSelect from '../../components/controls_UI/DepartmentSelect';
import PersonSelect from '../../components/controls_UI/PersonSelect';
import PositionSelect from '../../components/controls_UI/PositionSelect';
import { formatDate } from '../../helpers/formatDate';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { EmploymentDTO } from '../../types/DTO/Employment';
import { useAddEmploymentMutation } from './useAddEmploymentMutation';
import { useUpdateEmploymentMutation } from './useUpdateEmploymentMutation';

const EmploymentContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  editEmployee?: EmploymentDTO | null;
}

const EmploymentContent = ({ closeDrawer, editEmployee }: Props) => {
  //TODO: formatowanie czasu, nie dziala edycja
  const [dateFrom, setDateFrom] = useState(formatDate(editEmployee?.DateFrom));
  const [dateTo, setDateTo] = useState(formatDate(editEmployee?.DateTo));
  const [selectedDepartment, setSelectedDepartment] = useState(
    editEmployee?.IdDepartment ?? ''
  );
  const [selectedPosition, setSelectedPosition] = useState(
    editEmployee?.IdPosition ?? ''
  );
  const [selectedPerson, setSelectedPerson] = useState(
    editEmployee?.IdPerson ?? ''
  );
  const [pesel, setPesel] = useState(0);
  const [password, setPassword] = useState('');

  const [showEmployeeConfig, setShowEmployeeConfig] = useState(false);
  const { setSnackbar } = useSnackbar();
  const addMutation = useAddEmploymentMutation();
  const updateMutation = useUpdateEmploymentMutation();

  useEffect(() => {
    if (selectedPerson) {
      getEmployee(selectedPerson)
        .then((res) => {
          if (res.status === 404) {
            setShowEmployeeConfig(true);
          }
        })
        .catch((e) => {
          setShowEmployeeConfig(true);
        });
    }
  }, [selectedPerson]);

  const handleOnSave = async () => {
    try {
      // new person
      if (showEmployeeConfig) {
        await postEmployee({
          IdPerson: selectedPerson,
          Pesel: pesel,
          Password: password,
        });
      }
      // edit emplyment
      if (editEmployee) {
        const empDTO: EmploymentDTO = {
          IdEmployment: editEmployee.IdEmployment,
          DateFrom: dateFrom,
          DateTo: dateTo || null,
          IdDepartment: selectedDepartment,
          IdPosition: selectedPosition,
          IdPerson: selectedPerson,
        };

        await updateMutation.mutateAsync(empDTO);
        setSnackbar(createSnackbarSuccess('Edytowano zatrudnienie'));
      }
      // new Employment
      else {
        await addMutation.mutateAsync({
          DateFrom: dateFrom,
          DateTo: dateTo || null,
          IdDepartment: selectedDepartment,
          IdPosition: selectedPosition,
          IdPerson: selectedPerson,
        });
        setSnackbar(createSnackbarSuccess('Dodano zatrudnienie'));
      }
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Operacja nie udała się'));
    } finally {
      closeDrawer();
    }
  };

  const handleDateChange = (e: any) => {
    const setterFn = e.target.name === 'dateFrom' ? setDateFrom : setDateTo;
    setterFn(e.target.value);
  };

  const handleOnPeselChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesel(Number(event.target.value));
  };
  const handleOnPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
  const {
    language: { schema },
  } = useLanguage();

  return (
    <EmploymentContentStyle>
      <TextField
        label={schema.dateFrom}
        name="dateFrom"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dateFrom}
        onChange={handleDateChange}
      />
      <TextField
        label={schema.dateTo}
        name="dateTo"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dateTo}
        onChange={handleDateChange}
      />
      <DepartmentSelect
        value={selectedDepartment}
        onChange={setSelectedDepartment}
      />

      <PositionSelect value={selectedPosition} onChange={setSelectedPosition} />

      <PersonSelect value={selectedPerson} onChange={setSelectedPerson} />

      {showEmployeeConfig && (
        <>
          <TextField
            label="Pesel"
            name="pesel"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={pesel}
            onChange={handleOnPeselChange}
          />
          <TextField
            label="Hasło"
            name="password"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            value={password}
            onChange={handleOnPasswordChange}
          />
        </>
      )}

      <Button
        disabled={
          !Boolean(dateFrom) ||
          !Boolean(selectedDepartment) ||
          !Boolean(selectedPosition) ||
          !Boolean(selectedPerson) ||
          (showEmployeeConfig && !Boolean(pesel)) ||
          (showEmployeeConfig && !Boolean(password))
        }
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        {schema.save}
      </Button>
    </EmploymentContentStyle>
  );
};

export default EmploymentContent;
