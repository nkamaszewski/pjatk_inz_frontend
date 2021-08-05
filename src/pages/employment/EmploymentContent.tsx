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

  const [showPesel, setShowPesel] = useState(false);

  useEffect(() => {
    if (selectedPerson) {
      try {
        getEmployee(selectedPerson).then((res) => {
          if (!res.data.length) {
            setShowPesel(true);
          }
        });
      } catch (e) {
        console.error(e);
      }
    }
  }, [selectedPerson]);

  const handleOnSave = () => {
    try {
      if (showPesel) {
        postEmployee({
          IdPerson: selectedPerson,
          Pesel: pesel,
        });
      }
      postEmployment({
        DateFrom: dateFrom,
        DateTo: dateTo,
        IdDepartment: selectedDepartment,
        IdPosition: selectedPosition,
        IdPerson: selectedPerson,
      }).then(() => fetchEmployments());
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

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesel(Number(event.target.value));
  };

  return (
    <EmploymentContentStyle>
      <h3>Dodaj pracownika</h3>
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

      {showPesel && (
        <TextField
          label="Pesel"
          name="pesel"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={pesel}
          onChange={handleOnChange}
        />
      )}

      <Button
        disabled={
          !Boolean(dateFrom) ||
          !Boolean(dateTo) ||
          !Boolean(selectedDepartment) ||
          !Boolean(selectedPosition) ||
          !Boolean(selectedPerson) ||
          (showPesel && !Boolean(pesel))
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
