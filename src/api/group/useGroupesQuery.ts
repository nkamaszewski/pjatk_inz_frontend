import { getGroups } from 'api/group/Group';
import { useQuery } from 'react-query';
import { GroupListDTO } from 'types/DTO/Group';

const DEFAULT_GROUPS = [{ IdGroup: 'all', Name: '' } as GroupListDTO];

export const useGroupesQuery = (withAll: boolean) => {
  const query = useQuery(['groups', 'control_ui'], async () => {
    const res = await getGroups();
    return withAll ? DEFAULT_GROUPS.concat(res.data) : res.data;
  });

  return query;
};
