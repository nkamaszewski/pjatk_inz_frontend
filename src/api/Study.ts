import axios from 'axios';

export const getStudies = () => axios.get('http://localhost:3000/api/studies/');

export const getStudyModes = () =>
  axios.get('http://localhost:3000/api/studymodess');

export const postStudyMode = (studyMode: { Name: string }) =>
  axios.post('http://localhost:3000/api/studymodess', studyMode);

export const getGraduateDegrees = () =>
  axios.get('http://localhost:3000/api/graduatedegrees');

export const postGraduateDegree = (graduateDegree: { Name: string }) =>
  axios.post('http://localhost:3000/api/graduatedegrees', graduateDegree);
