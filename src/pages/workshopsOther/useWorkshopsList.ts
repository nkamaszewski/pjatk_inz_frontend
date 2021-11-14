import { getOtherEducations } from 'api/OtherEducation';
import { useCallback, useEffect, useState } from 'react';
import { OtherEducationListDTO } from 'types/DTO/OtherEducation';

export const useWorkshopList = () => {
  const [workshops, setWorkshops] = useState<OtherEducationListDTO[]>([]);

  const fetchWorkshops = useCallback(() => {
    try {
      getOtherEducations().then((res) => {
        setWorkshops(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchWorkshops();
  }, [fetchWorkshops]);

  return { workshops, fetchWorkshops };
};
