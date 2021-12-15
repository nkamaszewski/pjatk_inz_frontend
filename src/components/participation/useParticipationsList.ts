import {
  deleteParticipation,
  getParticipationsByIdEducation,
  postParticipation,
} from 'api/Participation';
import {
  createSnackbarError,
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
      setSnackbar(createSnackbarSuccess('dodano uczestnika'));
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('nie udało się dodać uczestnika!'));
    }
  };

  const removeParticipation = async (idParticipation: string) => {
    try {
      await deleteParticipation(idParticipation);
      await fetchParticipations();
      setSnackbar(createSnackbarSuccess('Usunięto uczestnika'));
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('nie udało się usunąć uczestnika!'));
    }
  };
  return {
    participations,
    fetchParticipations,
    removeParticipation,
    addParticipation,
  };
};
