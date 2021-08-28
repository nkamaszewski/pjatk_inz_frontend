import axios from 'axios';

export const getApplicationsForReason = () =>
  axios.get('http://localhost:3000/api/appforreasons');

export const deleteApplicationsForReason = (id: string) =>
  axios.delete(`http://localhost:3000/api/appforreasons/${id}`);
