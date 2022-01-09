import { axiosJWT } from 'helpers/tokenAxios';
import { GroupDTO, GroupListDTO } from 'types/DTO/Group';
import { ALL } from '../../providers/FilterContext';

interface QueryParams {
  active: typeof ALL | '1' | null;
}

export const getGroups = (params: QueryParams = { active: null }) => {
  const query: QueryParams = { ...params };
  if (params.active === ALL) query.active = null;
  return axiosJWT.get<GroupListDTO[]>('/groups', { params: query });
};

export const postGroup = (group: Omit<GroupDTO, 'IdGroup'>) =>
  axiosJWT.post<GroupDTO>('/groups/', group);

export const updateGroup = (group: GroupDTO) =>
  axiosJWT.put<GroupDTO>(`/groups/${group.IdGroup}`, group);

export const deleteGroup = ({ id }: { id: string }) =>
  axiosJWT.delete(`/groups/${id}`);
