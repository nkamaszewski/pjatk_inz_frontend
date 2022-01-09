import { axiosJWT } from 'helpers/tokenAxios';
import { TopicDTO } from 'types/DTO/Topic';

export const getTopics = () => axiosJWT.get<TopicDTO[]>('/topics');

export const postTopic = (topic: { Topic: string; IdSubject: string }) =>
  axiosJWT.post<TopicDTO>('/topics/', topic);
