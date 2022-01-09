import { axiosJWT } from 'helpers/tokenAxios';
import { TrainingDTO } from 'types/DTO/Training';
import { ALL, ITrainingFilters } from '../../providers/FilterContext';

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
  axiosJWT.post<TrainingTransfer>('/trainings/', training);

export const deleteTraining = ({ id }: { id: string }) =>
  axiosJWT.delete(`/trainings/${id}`);

export const updateTraining = (training: TrainingTransfer) =>
  axiosJWT.put<TrainingTransfer>(
    `/trainings/${training.IdEducation}`,
    training
  );
