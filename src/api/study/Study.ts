import { axiosJWT } from 'helpers/tokenAxios';
import { GraduateDegreeDTO } from 'types/DTO/GraduateDegree';
import { StudyModeDTO } from 'types/DTO/StudyMode';
import { StudiesListDTO, StudyDTO } from '../../types/DTO/Study';

export const getStudies = () => axiosJWT.get<StudiesListDTO[]>('/studies');

export const postStudy = (study: StudyDTO) => axiosJWT.post('/studies/', study);

export const deleteStudy = (id: string) => axiosJWT.delete(`/studies/${id}`);

export const updateStudy = (study: StudyDTO) =>
  axiosJWT.put(`/studies/${study.IdEducation}`, study);

export const getStudyModes = () => axiosJWT.get<StudyModeDTO[]>('/studymodess');

export const postStudyMode = (studyMode: { Name: string }) =>
  axiosJWT.post('/studymodess', studyMode);

export const getGraduateDegrees = () =>
  axiosJWT.get<GraduateDegreeDTO[]>('/graduatedegrees');

export const postGraduateDegree = (graduateDegree: { Name: string }) =>
  axiosJWT.post('/graduatedegrees', graduateDegree);
