import axios from 'axios';

export const getApplicationsForRefund = () =>
  axios.get('http://localhost:3000/api/appforrefund');

export const deleteApplicationsForRefund = (id: string) =>
  axios.delete(`http://localhost:3000/api/appforrefund/${id}`);
