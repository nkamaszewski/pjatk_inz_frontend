import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { postRoom } from '../../api/Room';

const RoomContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchRooms: Function;
}

const RoomContent = ({ closeDrawer, fetchRooms }: Props) => {
  const [name, setName] = useState('');
  const [area, setArea] = useState(0);
  const [capacitySet1, setCapacitySet1] = useState(0);
  const [capacitySet2, setCapacitySet2] = useState(0);
  const [capacitySet3, setCapacitySet3] = useState(0);
  const [capacitySet4, setCapacitySet4] = useState(0);

  const handleOnSave = () => {
    try {
      postRoom({
        Name: name,
        Area: area,
        CapacitySet1: capacitySet1,
        CapacitySet2: capacitySet2,
        CapacitySet3: capacitySet3,
        CapacitySet4: capacitySet4,
      }).then(() => fetchRooms());
    } catch (e) {
      console.error(e);
    } finally {
      closeDrawer();
    }
  };

  return (
    <RoomContentStyle>
      <h3>Dodaj Salę</h3>
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
        label="Powierzchnia w m2"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={area}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setArea(Number(event.target.value))
        }
      />
      <TextField
        label="Ilość miejsc 1"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={capacitySet1}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCapacitySet1(Number(event.target.value))
        }
      />
      <TextField
        label="Ilość miejsc 2"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={capacitySet2}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCapacitySet2(Number(event.target.value))
        }
      />
      <TextField
        label="Ilość miejsc 3"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={capacitySet3}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCapacitySet3(Number(event.target.value))
        }
      />
      <TextField
        label="Ilość miejsc 4"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={capacitySet4}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCapacitySet4(Number(event.target.value))
        }
      />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        Zapisz
      </Button>
    </RoomContentStyle>
  );
};

export default RoomContent;
