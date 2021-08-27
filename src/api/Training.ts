import axios from 'axios';

interface TrainingTransfer {
  IdEducation: string;
  IdTopic: string;
  IdCompany: string;
  IdPerson: string;
  Internal: boolean;
  DateFrom: Date | string;
  DateTo: Date | string;
}

export const getTrainings = () =>
  axios.get('http://localhost:3000/api/trainings');

export const postTraining = (training: TrainingTransfer) =>
  axios.post('http://localhost:3000/api/trainings/', training);

export const deleteTraining = (id: string) =>
  axios.delete(`http://localhost:3000/api/trainings/${id}`);

export const updateTraining = (training: TrainingTransfer) =>
  axios.put(
    `http://localhost:3000/api/trainings/${training.IdEducation}`,
    training
  );

export const getTopics = () => axios.get('http://localhost:3000/api/topics');

export const postTopic = (topic: { Topic: string; IdSubject: string }) =>
  axios.post('http://localhost:3000/api/topics/', topic);

export const getSubjects = () =>
  axios.get('http://localhost:3000/api/subjects');

export const postSubject = (subject: { Subject: string }) =>
  axios.post('http://localhost:3000/api/subjects/', subject);
