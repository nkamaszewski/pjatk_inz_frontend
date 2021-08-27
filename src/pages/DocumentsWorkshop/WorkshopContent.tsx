import { Button, Switch } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  postApplicationsFor,
  updateApplicationsFor,
} from '../../api/Application';
import StudySelect from '../../components/controls_UI/StudySelect';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import TrainingSelect from '../../components/controls_UI/TrainingSelect';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
import { ApplicationForDTO } from '../../types/DTO/ApplicationFor';

const WorkshopContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchApplications: Function;
  editApplicationFor?: ApplicationForDTO | null;
}

const WorkshopContent = ({
  closeDrawer,
  fetchApplications,
  editApplicationFor,
}: Props) => {
  const [isStudy, setIsStudy] = useState(false);
  const [idEducation, setIdEducation] = useState('');
  const [compatibility, setCompatibility] = useState(false);
  const { setSnackbar } = useSnackbar();

  useEffect(() => {
    setIdEducation('');
  }, [isStudy]);

  const handleOnSave = async () => {
    try {
      if (editApplicationFor) {
        await updateApplicationsFor({
          IdApplicationFor: editApplicationFor.IdApplicationFor,
          DateOfSubmission: editApplicationFor.DateOfSubmission,
          IdEducation: idEducation,
          IdStatus: editApplicationFor.IdStatus,
          Compatibility: compatibility,
          IdPerson: '1',
        });
        setSnackbar(createSnackbarSuccess('Wniosek został wyedytowany'));
      } else {
        await postApplicationsFor({
          DateOfSubmission: new Date(),
          IdEducation: idEducation,
          IdStatus: '1',
          Compatibility: compatibility,
          IdPerson: '1',
        });
        setSnackbar(createSnackbarSuccess('Wniosek został dodany'));
      }
    } catch (e) {
      console.error(e);
    } finally {
      fetchApplications();
      closeDrawer();
    }
  };

  return (
    <WorkshopContentStyle>
      <SwitchBtn
        value={isStudy}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setIsStudy(event.target.checked)
        }
        label="Wniosek dotyczy studiów?"
      />

      {isStudy ? (
        <StudySelect value={idEducation} onChange={setIdEducation} />
      ) : (
        <TrainingSelect value={idEducation} onChange={setIdEducation} />
      )}

      <SwitchBtn
        value={compatibility}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCompatibility(event.target.checked)
        }
        label="Czy poprawny?"
      />

      <Button
        // disabled={!Boolean(year)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        Zapisz
      </Button>
    </WorkshopContentStyle>
  );
};

export default WorkshopContent;
