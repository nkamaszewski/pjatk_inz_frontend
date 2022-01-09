import { useQuery } from 'react-query';
import { getParticipationsByIdEducation } from './Participation';

export const PARTICIPATIONS_QUERY_KEY = ['participations'];

export const useParticipationsQuery = (IdEducation: string) => {
  const query = useQuery([...PARTICIPATIONS_QUERY_KEY, IdEducation], () =>
    getParticipationsByIdEducation(IdEducation)
  );

  return query;
};
