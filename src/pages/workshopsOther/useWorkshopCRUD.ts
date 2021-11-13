import { postEducation } from 'api/Education';
import { postOtherEducation } from 'api/OtherEducation';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { EducationDTO } from 'types/DTO/Education';
import { OtherEducationListDTO } from 'types/DTO/OtherEducation';

export const useWorkshopCRUD = () => {
  const { setSnackbar } = useSnackbar();

  const addItem = async (
    workshop: Omit<OtherEducationListDTO, 'IdEducation'>,
    education: Omit<EducationDTO, 'IdEducation'>
  ) => {
    try {
      const response = await postEducation(education);
      const { IdEducation } = response.data;
      await postOtherEducation({ ...workshop, IdEducation });
      setSnackbar(createSnackbarSuccess('Dodano szkolenie!'));
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Nie udało się dodać szkolenia!'));
    }
  };

  // const deleteItem = async (id: string) => {
  //   try {
  //     await deleteMeeting(id);
  //     setSnackbar(createSnackbarSuccess('Usunięto spotkanie!'));
  //   } catch (e) {
  //     console.error(e);
  //     setSnackbar(createSnackbarError('Nie udało się usunąć spotkania!'));
  //   }
  // };

  // const editItem = async (meeting: MeetingDTOShort) => {
  //   try {
  //     await updateMeeting(meeting);
  //     setSnackbar(createSnackbarSuccess('Wyedytowano spotkanie!'));
  //   } catch (e) {
  //     console.error(e);
  //     setSnackbar(createSnackbarError('Nie udało się wydedytować spotkania!'));
  //   }
  // };

  return { addItem };
};
