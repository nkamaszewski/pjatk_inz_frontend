import { Button, Switch } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  postApplicationsFor,
  updateApplicationsFor,
} from '../../../api/Application';
import StudySelect from '../../../components/controls_UI/StudySelect';
import TrainingSelect from '../../../components/controls_UI/TrainingSelect';
import { NotificationContext } from '../../../contexts/NotificationContext';
import { createSnackbarSuccess } from '../../../hooks/useNotification';
import { ApplicationForDTO } from '../../../types/DTO/ApplicationFor';

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
  const [compability, setCompability] = useState(false);

  const notificationCtx = useContext(NotificationContext);

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
          Compability: compability,
          IdPerson: '1',
        });
        notificationCtx.setSnackbar(
          createSnackbarSuccess('Wniosek został wyedytowany')
        );
      } else {
        await postApplicationsFor({
          DateOfSubmission: new Date(),
          IdEducation: idEducation,
          IdStatus: '1',
          Compability: compability,
          IdPerson: '1',
        });
        notificationCtx.setSnackbar(
          createSnackbarSuccess('Wniosek został dodany')
        );
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
      <h3>{editApplicationFor ? 'Edytuj' : 'Dodaj'} wniosek</h3>
      <div className="switch-btn">
        <p>Wniosek dotyczy studiów? </p>
        <Switch
          checked={isStudy}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setIsStudy(event.target.checked)
          }
          color="primary"
        />
      </div>

      {isStudy ? (
        <StudySelect value={idEducation} onChange={setIdEducation} />
      ) : (
        <TrainingSelect value={idEducation} onChange={setIdEducation} />
      )}

      <div className="switch-btn">
        <p>Czy poprawny? </p>
        <Switch
          checked={compability}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCompability(event.target.checked)
          }
          color="primary"
        />
      </div>

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
