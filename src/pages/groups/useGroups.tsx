import { getGroups } from 'api/Group';
import { IGroupFilters, useFilter } from 'providers/FilterContext';
import { useCallback, useEffect, useState } from 'react';
import { GroupDTO } from 'types/DTO/Group';

export const useGroups = () => {
  const [groups, setGroups]: [GroupDTO[], Function] = useState([]);
  const {
    group: { filters },
  } = useFilter();

  const fetchGroups = useCallback((fetchParams: IGroupFilters) => {
    try {
      getGroups(fetchParams).then((res) => {
        setGroups(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchGroups(filters);
  }, [filters]);

  return { groups, fetchGroups };
};
