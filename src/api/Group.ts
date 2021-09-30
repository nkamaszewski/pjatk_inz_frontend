import { axiosJWT } from 'helpers/tokenAxios';
import { ALL } from '../providers/FilterContext';

interface QueryParams {
  active: typeof ALL | '1' | null;
}

export const getGroups = (params: QueryParams = { active: null }) => {
  const query: QueryParams = { ...params };
  if (params.active === ALL) query.active = null;
  return axiosJWT.get('/groups', { params: query });
};

export const postGroup = (group: {
  Name: string;
  NumberOfPerson: number;
  IdEducation: string;
}) => axiosJWT.post('/groups/', group);

export const deleteGroup = (id: string) => axiosJWT.delete(`/groups/${id}`);
