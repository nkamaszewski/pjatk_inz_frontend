import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postGroup } from '../../api/Group';
import TrainingSelect from '../../components/controls_UI/TrainingSelect';

const GroupContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchGroups: Function;
}

const GroupContent = ({ closeDrawer, fetchGroups }: Props) => {
  const [name, setName] = useState('');
  const [numberOfPerson, setNumberOfPerson] = useState(0);
  const [idEducation, setIdEducation] = useState('0');

  const handleOnSave = () => {
    try {
      postGroup({
        Name: name,
        NumberOfPerson: numberOfPerson,
        IdEducation: idEducation,
      }).then(() => fetchGroups());
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  return (
    <GroupContentStyle>
      <TextField
        label="Nazwa"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />
      <TextField
        label="Liczba osób"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={numberOfPerson}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNumberOfPerson(Number(event.target.value))
        }
      />

      <TrainingSelect value={idEducation} onChange={setIdEducation} />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        Zapisz
      </Button>
    </GroupContentStyle>
  );
};

export default GroupContent;
