import axios from 'axios';
import { TrainingDTO } from '../types/DTO/Training';

export const getTrainings = () =>
  axios.get('http://localhost:3000/api/trainings');

export const postTraining = (training: {
  IdEducation: string;
  IdTopic: string;
  IdCompany: string;
  IdPerson: string;
  Internal: boolean;
  DateFrom: Date;
}) => axios.post('http://localhost:3000/api/trainings/', training);

export const getTopics = () => axios.get('http://localhost:3000/api/topics');

export const postTopic = (topic: { Topic: string; IdSubject: string }) =>
  axios.post('http://localhost:3000/api/topics/', topic);

export const getSubjects = () =>
  axios.get('http://localhost:3000/api/subjects');

export const postSubject = (subject: { Subject: string }) =>
  axios.post('http://localhost:3000/api/subjects/', subject);
