import axios from 'axios';

export const getReasonsForRefund = () =>
  axios.get('http://localhost:3000/api/reasforrefund');
