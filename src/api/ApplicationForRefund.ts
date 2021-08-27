import axios from 'axios';

export const getApplicationsForRefund = () =>
  axios.get('http://localhost:3000/api/appforrefund');
