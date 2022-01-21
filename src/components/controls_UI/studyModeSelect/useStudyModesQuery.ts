import { getStudyModes } from 'api/study/Study';
import { useQuery } from 'react-query';

export const useStudyModesQuery = () => {
  const query = useQuery(['studyModes', 'control_ui'], () => getStudyModes());

  return query;
};
