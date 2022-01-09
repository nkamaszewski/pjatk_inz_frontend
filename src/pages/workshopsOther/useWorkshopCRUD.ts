import { postEducation, updateEducation } from 'api/Education';
import {
  deleteOtherEducation,
  getOtherEducation,
  postOtherEducation,
  updateOtherEducation,
} from 'api/OtherEducation';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import {
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { EducationDTO } from 'types/DTO/Education';
import {
  OtherEducationDTO,
  OtherEducationListDTO,
} from 'types/DTO/OtherEducation';

export const useWorkshopCRUD = () => {
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const getItem = async (id: string) => {
    const response = await getOtherEducation(id);
    return response.data;
  };

  const addItem = async (
    workshop: Omit<OtherEducationListDTO, 'IdEducation'>,
    education: Omit<EducationDTO, 'IdEducation'>
  ) => {
    try {
      const response = await postEducation(education);
      const { IdEducation } = response.data;
      await postOtherEducation({ ...workshop, IdEducation });
      setSnackbar(createSnackbarSuccess(schema.trainingAdded));
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await deleteOtherEducation(id);
      setSnackbar(createSnackbarSuccess(schema.trainingRemoved));
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };

  const editItem = async (item: OtherEducationDTO) => {
    try {
      await updateEducation(item.otherEducationEducation);
      await updateOtherEducation({
        IdEducation: item.IdEducation,
        Name: item.Name,
        IdCompany: item.IdCompany,
      });
      setSnackbar(createSnackbarSuccess(schema.theTrainingHasBeenEdited));
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    }
  };
  const schema = useLanguageSchema();
  return { getItem, addItem, deleteItem, editItem };
};
