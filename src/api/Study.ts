import axios from 'axios';

export const getStudies = () => axios.get('http://localhost:3000/api/studies/');

export const getStudyModes = () =>
  axios.get('http://localhost:3000/api/studymodess');

export const postStudyMode = (studyMode: { Name: string }) =>
  axios.post('http://localhost:3000/api/studymodess', studyMode);
