import { getOtherEducations } from 'api/OtherEducation';
import { useLoader } from 'providers/LoaderProvider';
import { useCallback, useEffect, useState } from 'react';
import { OtherEducationListDTO } from 'types/DTO/OtherEducation';

export const useWorkshopList = () => {
  const [workshops, setWorkshops] = useState<OtherEducationListDTO[]>([]);
  const { startLoading, stopLoading } = useLoader();

  const fetchWorkshops = useCallback(() => {
    startLoading();
    try {
      getOtherEducations().then((res) => {
        setWorkshops(res.data);
      });
    } catch (e) {
      console.error(e);
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  useEffect(() => {
    fetchWorkshops();
  }, [fetchWorkshops]);

  return { workshops, fetchWorkshops };
};
