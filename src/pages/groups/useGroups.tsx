import { getGroups } from 'api/Group';
import { useFilter } from 'providers/FilterContext';
import { useCallback, useEffect, useState } from 'react';
import { GroupDTO } from 'types/DTO/Group';

export const useGroups = () => {
  const [groups, setGroups]: [GroupDTO[], Function] = useState([]);
  const {
    group: { filters },
  } = useFilter();

  const fetchGroups = useCallback(() => {
    try {
      getGroups(filters).then((res) => {
        setGroups(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, [filters]);

  useEffect(() => {
    fetchGroups();
  }, [filters, fetchGroups]);

  return { groups, fetchGroups };
};
