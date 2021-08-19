import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getEmployee, postEmployee } from '../../api/Employee';
import { postEmployment } from '../../api/Employment';
import DepartmentSelect from '../../components/controls_UI/DepartmentSelect';
import PersonSelect from '../../components/controls_UI/PersonSelect';
import PositionSelect from '../../components/controls_UI/PositionSelect';

const EmploymentContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchEmployments: Function;
}

const EmploymentContent = ({ closeDrawer, fetchEmployments }: Props) => {
  const [dateFrom, setDateFrom] = useState('2021-01-01');
  const [dateTo, setDateTo] = useState('2021-12-01');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [pesel, setPesel] = useState(0);
  const [password, setPassword] = useState('');

  const [showEmployeeConfig, setShowEmployeeConfig] = useState(false);

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
      if (showEmployeeConfig) {
        await postEmployee({
          IdPerson: selectedPerson,
          Pesel: pesel,
          Password: password,
        });
      }
      await postEmployment({
        DateFrom: dateFrom,
        DateTo: dateTo,
        IdDepartment: selectedDepartment,
        IdPosition: selectedPosition,
        IdPerson: selectedPerson,
      });
      fetchEmployments();
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  const handleDateChange = (e: any) => {
    const setterFn = e.target.name === dateFrom ? setDateFrom : setDateTo;
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

  return (
    <EmploymentContentStyle>
      <TextField
        label="Data od"
        name="dateFrom"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={dateFrom}
        onChange={handleDateChange}
      />
      <TextField
        label="Data do"
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
          !Boolean(dateTo) ||
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
        Zapisz
      </Button>
    </EmploymentContentStyle>
  );
};

export default EmploymentContent;
