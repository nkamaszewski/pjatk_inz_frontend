import { Button } from '@material-ui/core';
import StatusSelect from 'components/controls_UI/StatusSelect';
import { useAuth } from 'providers/AuthProvider';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import {
  postApplicationsFor,
  updateApplicationsFor,
} from '../../api/Application';
import StudySelect from '../../components/controls_UI/studySelect/StudySelect';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import TrainingSelect from '../../components/controls_UI/trainingSelect/TrainingSelect';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { ApplicationForDTO } from '../../types/DTO/ApplicationFor';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

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
  const [isStudy, setIsStudy] = useState(
    editApplicationFor ? editApplicationFor.IsStudy : false
  );
  const [idEducation, setIdEducation] = useState(
    editApplicationFor ? editApplicationFor.IdEducation : ''
  );
  const [compatibility, setCompatibility] = useState(
    editApplicationFor ? editApplicationFor.Compatibility : false
  );
  const [idStatus, setIdStatus] = useState(
    editApplicationFor ? editApplicationFor.IdStatus : ''
  );
  const { setSnackbar } = useSnackbar();
  const {
    auth: { user },
  } = useAuth();

  const handleHttpError = useHandleHttpError();

  const handleOnSave = async () => {
    try {
      if (editApplicationFor) {
        await updateApplicationsFor({
          IdApplicationFor: editApplicationFor.IdApplicationFor,
          DateOfSubmission: editApplicationFor.DateOfSubmission,
          IdEducation: idEducation,
          IdStatus: idStatus,
          Compatibility: compatibility,
          IdPerson: user?.IdPerson ?? '',
        });
        setSnackbar(createSnackbarSuccess('Wniosek został wyedytowany'));
        closeDrawer();
      } else {
        await postApplicationsFor({
          DateOfSubmission: new Date(),
          IdEducation: idEducation,
          IdStatus: idStatus,
          Compatibility: compatibility,
          IdPerson: user?.IdPerson ?? '',
        });
        setSnackbar(createSnackbarSuccess('Wniosek został dodany'));
        closeDrawer();
      }
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    } finally {
      fetchApplications();
    }
  };
  const schema = useLanguageSchema();

  return (
    <WorkshopContentStyle>
      <SwitchBtn
        value={isStudy}
        onChange={(checked) => {
          setIsStudy(checked);
          setIdEducation('');
        }}
        label={schema.theApplicationConcernsStudies}
      />

      {isStudy ? (
        <StudySelect value={idEducation} onChange={setIdEducation} />
      ) : (
        <TrainingSelect value={idEducation} onChange={setIdEducation} />
      )}

      <SwitchBtn
        value={compatibility}
        onChange={(checked) => setCompatibility(checked)}
        label={schema.isItInLineWithTheTermsOfReference}
      />

      <StatusSelect
        value={idStatus}
        onChange={(
          event: React.ChangeEvent<{
            value: unknown;
            name?: string | undefined;
          }>
        ) => setIdStatus(event.target.value as string)}
      />

      <Button
        // disabled={!Boolean(year)}
        variant="contained"
        color="primary"
        onClick={handleOnSave}
      >
        {schema.save}
      </Button>
    </WorkshopContentStyle>
  );
};

export default WorkshopContent;
