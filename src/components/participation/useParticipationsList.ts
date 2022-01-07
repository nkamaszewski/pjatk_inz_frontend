import {
  deleteParticipation,
  getParticipationsByIdEducation,
  postParticipation,
} from 'api/Participation';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguage } from 'providers/LanguageProvider';
import {
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { useEffect, useState } from 'react';
import {
  ParticipationDTO,
  ParticipationsListDTO,
} from 'types/DTO/Participation';

export const useParticipationsList = (IdEducation: string) => {
  const [participations, setParticipations] = useState<ParticipationsListDTO[]>(
    []
  );
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const fetchParticipations = async () => {
    try {
      const response = await getParticipationsByIdEducation(IdEducation);
      setParticipations(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchParticipations();
    // eslint-disable-next-line
  }, []);

  const addParticipation = async (
    participation: Omit<ParticipationDTO, 'IdParticipation' | 'IdEducation'>
  ) => {
    try {
      await postParticipation({ ...participation, IdEducation });
      await fetchParticipations();
      setSnackbar(createSnackbarSuccess(schema.participantAdded));
    } catch (e) {
      console.error(e);
      // setSnackbar(createSnackbarError(schema.failedToAddAParticipant));
      handleHttpError(e);
    }
  };

  const removeParticipation = async (idParticipation: string) => {
    try {
      await deleteParticipation(idParticipation);
      await fetchParticipations();
      setSnackbar(createSnackbarSuccess(schema.participantRemoved));
    } catch (e) {
      console.error(e);
      handleHttpError(e);
      // setSnackbar(createSnackbarError(schema.theParticipantCouldNotBeRemoved));
    }
  };
  const {
    language: { schema },
  } = useLanguage();
  return {
    participations,
    fetchParticipations,
    removeParticipation,
    addParticipation,
  };
};
