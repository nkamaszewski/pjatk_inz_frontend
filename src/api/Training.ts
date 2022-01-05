import { axiosJWT } from 'helpers/tokenAxios';
import { SubjectDTO } from 'types/DTO/Subject';
import { TopicDTO } from 'types/DTO/Topic';
import { TrainingDTO } from 'types/DTO/Training';
import { ALL, ITrainingFilters } from '../providers/FilterContext';

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
  return axiosJWT.get<TrainingDTO[]>('/trainings', { params: query });
};

export const postTraining = (training: TrainingTransfer) =>
  axiosJWT.post('/trainings/', training);

export const deleteTraining = (id: string) =>
  axiosJWT.delete(`/trainings/${id}`);

export const updateTraining = (training: TrainingTransfer) =>
  axiosJWT.put(`/trainings/${training.IdEducation}`, training);

export const getTopics = () => axiosJWT.get<TopicDTO[]>('/topics');

export const postTopic = (topic: { Topic: string; IdSubject: string }) =>
  axiosJWT.post('/topics/', topic);

export const getSubjects = () => axiosJWT.get<SubjectDTO[]>('/subjects');

export const postSubject = (subject: { Subject: string }) =>
  axiosJWT.post('/subjects/', subject);
