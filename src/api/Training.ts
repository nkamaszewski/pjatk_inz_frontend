import { axiosJWT } from 'helpers/tokenAxios';
import { ALL, ITrainingFilters } from '../contexts/FilterContext';

interface TrainingTransfer {
  IdEducation: string;
  IdTopic: string;
  IdCompany: string;
  IdPerson: string;
  Internal: boolean;
  DateFrom: Date | string;
  DateTo: Date | string;
}

export const getTrainings = (params: ITrainingFilters = { internal: null }) => {
  const query = { ...params };
  if (query.internal === ALL) query.internal = null;
  return axiosJWT.get('/trainings', { params: query });
};

export const postTraining = (training: TrainingTransfer) =>
  axiosJWT.post('/trainings/', training);

export const deleteTraining = (id: string) =>
  axiosJWT.delete(`/trainings/${id}`);

export const updateTraining = (training: TrainingTransfer) =>
  axiosJWT.put(`/trainings/${training.IdEducation}`, training);

export const getTopics = () => axiosJWT.get('/topics');

export const postTopic = (topic: { Topic: string; IdSubject: string }) =>
  axiosJWT.post('/topics/', topic);

export const getSubjects = () => axiosJWT.get('/subjects');

export const postSubject = (subject: { Subject: string }) =>
  axiosJWT.post('/subjects/', subject);
