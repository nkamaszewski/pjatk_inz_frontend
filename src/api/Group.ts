import axios from 'axios';
import { ALL } from '../contexts/FilterContext';

interface QueryParams {
  active: typeof ALL | '1' | null;
}

export const getGroups = (params: QueryParams = { active: null }) => {
  const query: QueryParams = { ...params };
  if (params.active === ALL) query.active = null;
  return axios.get('http://localhost:3000/api/groups', { params: query });
};

export const postGroup = (group: {
  Name: string;
  NumberOfPerson: number;
  IdEducation: string;
}) => axios.post('http://localhost:3000/api/groups/', group);

export const deleteGroup = (id: string) =>
  axios.delete(`http://localhost:3000/api/groups/${id}`);
