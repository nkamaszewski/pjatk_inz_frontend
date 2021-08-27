import axios from 'axios';

export const getStatuses = () => axios.get('http://localhost:3000/api/status/');
