import { Button, Switch, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postEducation } from '../../api/Education';
import { postTraining } from '../../api/Training';
import CoachSelect from '../../components/controls_UI/CoachSelect';
import CompanySelect from '../../components/controls_UI/CompanySelect';
import TopicSelect from '../../components/controls_UI/TopicSelect';

const TrainingContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;

  .switch-btn {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`;

interface Props {
  closeDrawer: Function;
  fetchTrainings: Function;
}

const TrainingContent = ({ closeDrawer, fetchTrainings }: Props) => {
  const [idTopic, setIdTopic] = useState('');
  const [idCompany, setIdCompany] = useState('');
  const [idPerson, setIdPerson] = useState('');
  const [internal, setInternal] = useState(false);
  const [dateFrom, setDateFrom] = useState(new Date());
  const [education, setEducation] = useState({
    Price: 0,
    PriceAccommodation: 0,
    PriceTransit: 0,
  });

  const handleOnSave = () => {
    try {
      postEducation(education).then((res) => {
        const { IdEducation } = res.data;
        postTraining({
          IdEducation,
          IdTopic: idTopic,
          IdCompany: idCompany,
          IdPerson: idPerson,
          Internal: internal,
          DateFrom: dateFrom,
        }).then(() => fetchTrainings());
      });
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  const handleOnEducationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateChange = (e: any) => {
    setDateFrom(e.target.value);
  };

  return (
    <TrainingContentStyle>
      <TopicSelect value={idTopic} onChange={setIdTopic} />

      <CompanySelect value={idCompany} onChange={setIdCompany} />

      <CoachSelect value={idPerson} onChange={setIdPerson} />

      <div className="switch-btn">
        <p>Szkolenie wewnętrzne: </p>
        <Switch
          checked={internal}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInternal(event.target.checked)
          }
          color="primary"
        />
      </div>
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
        label="Cena"
        name="Price"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.Price}
        onChange={handleOnEducationChange}
      />

      <TextField
        label="Cena zakwaterowania"
        name="PriceAccommodation"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.PriceAccommodation}
        onChange={handleOnEducationChange}
      />

      <TextField
        label="Koszt transportu"
        name="PriceTransit"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.PriceTransit}
        onChange={handleOnEducationChange}
      />

      <Button
        // disabled={!Boolean(fieldOfStudy)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        Zapisz
      </Button>
    </TrainingContentStyle>
  );
};

export default TrainingContent;