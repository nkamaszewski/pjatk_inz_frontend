import axios from 'axios';

export const postEducation = (education: {
  Price: number;
  PriceAccommodation: number;
  PriceTransit: number;
}) => axios.post('http://localhost:3000/api/education/', education);
