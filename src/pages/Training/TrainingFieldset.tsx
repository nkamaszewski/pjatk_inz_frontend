import styled from 'styled-components';
import TrainingContent from './TrainingContent';

const TrainingFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchTrainings: Function;
}

const TrainingFieldset = ({ closeDrawer, fetchTrainings }: Props) => {
  return (
    <TrainingFieldsetStyle>
      <TrainingContent
        closeDrawer={closeDrawer}
        fetchTrainings={fetchTrainings}
      />
    </TrainingFieldsetStyle>
  );
};

export default TrainingFieldset;
