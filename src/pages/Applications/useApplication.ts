import { deleteApplicationsFor, getApplicationFor } from 'api/Application';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import {
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { useState } from 'react';
import { ApplicationForDTO } from 'types/DTO/ApplicationFor';

export const useApplication = (cbFunction: Function) => {
  const [editApplicationFor, setEditApplicationFor] =
    useState<ApplicationForDTO | null>(null);
  const handleHttpError = useHandleHttpError();

  const { setSnackbar } = useSnackbar();

  const getItem = async (id: string) => {
    const response = await getApplicationFor(id);
    return response.data;
  };

  const getForEdit = async (id: string) => {
    try {
      const application = await getItem(id);
      setEditApplicationFor(application);
    } catch (e) {
      console.error(e);
    }
  };

  const cancelEditing = () => setEditApplicationFor(null);

  const deleteItem = async (id: string) => {
    try {
      await deleteApplicationsFor(id);
      setSnackbar(createSnackbarSuccess('Usunięto wniosek!'));
      cbFunction();
    } catch (e) {
      handleHttpError(e);
    }
  };

  //   const addItem = async (
  //     workshop: Omit<OtherEducationListDTO, 'IdEducation'>,
  //     education: Omit<EducationDTO, 'IdEducation'>
  //   ) => {
  //     try {
  //       const response = await postEducation(education);
  //       const { IdEducation } = response.data;
  //       await postOtherEducation({ ...workshop, IdEducation });
  //       setSnackbar(createSnackbarSuccess('Dodano szkolenie!'));
  //     } catch (e) {
  //       console.error(e);
  //       setSnackbar(createSnackbarError('Nie udało się dodać szkolenia!'));
  //     }
  //   };

  //   const editItem = async (item: OtherEducationDTO) => {
  //     try {
  //       await updateEducation(item.otherEducationEducation);
  //       await updateOtherEducation({
  //         IdEducation: item.IdEducation,
  //         Name: item.Name,
  //         IdCompany: item.IdCompany,
  //       });
  //       setSnackbar(createSnackbarSuccess('Szkolenie zostało wyedytowane'));
  //     } catch (e) {
  //       console.error(e);
  //       setSnackbar(createSnackbarError('Nie udało się wydedytować szkolenia!'));
  //     }
  //   };

  return { editApplicationFor, getForEdit, cancelEditing, getItem, deleteItem };
};
