import { useQuery } from 'react-query';
import { getOtherEducations } from './OtherEducation';

export const OTHER_EDUCATIONS_QUERY_KEY = ['otherEducations'];

export const useOtherEducationsQuery = () => {
  const query = useQuery(OTHER_EDUCATIONS_QUERY_KEY, () =>
    getOtherEducations()
  );

  return query;
};
