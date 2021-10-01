import { getTrainings } from 'api/Training';
import { useFilter } from 'providers/FilterContext';
import { useCallback, useEffect, useState } from 'react';
import { TrainingDTO } from 'types/DTO/Training';

export const useTrainings = () => {
  const [trainings, setTrainings] = useState<TrainingDTO[]>([]);
  const {
    training: { filters },
  } = useFilter();

  const fetchTrainings = useCallback(() => {
    try {
      getTrainings(filters).then((res) => {
        setTrainings(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, [filters]);

  useEffect(() => {
    fetchTrainings();
  }, [filters, fetchTrainings]);

  return { trainings, fetchTrainings };
};
