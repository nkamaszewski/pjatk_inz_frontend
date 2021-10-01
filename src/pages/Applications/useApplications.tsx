import { getApplicationsFor } from 'api/Application';
import { useFilter } from 'providers/FilterContext';
import { useCallback, useEffect, useState } from 'react';
import { ApplicationForListDTO } from 'types/DTO/ApplicationFor';

export const useApplications = () => {
  const [applications, setApplications]: [ApplicationForListDTO[], Function] =
    useState([]);
  const {
    workshop: { filters },
  } = useFilter();

  const fetchApplications = useCallback(() => {
    try {
      getApplicationsFor(filters).then((res) => {
        setApplications(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, [filters]);

  useEffect(() => {
    fetchApplications();
  }, [filters]);

  return { applications, fetchApplications };
};
