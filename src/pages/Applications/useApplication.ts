import { deleteApplicationsFor, getApplicationFor } from 'api/Application';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from 'providers/NotificationContext';
import { useState } from 'react';
import { ApplicationForDTO } from 'types/DTO/ApplicationFor';
import { useApplicationsList } from './useApplicationsList';

export const useApplication = () => {
  const [editApplicationFor, setEditApplicationFor] =
    useState<ApplicationForDTO | null>(null);
  const { fetchApplications } = useApplicationsList();

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
      fetchApplications();
    } catch (e) {
      console.error(e);
      setSnackbar(createSnackbarError('Nie udało się usunąć wniosku!'));
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
