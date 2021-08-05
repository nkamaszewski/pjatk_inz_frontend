import axios from 'axios';

export const getStudies = () => axios.get('http://localhost:3000/api/studies/');
