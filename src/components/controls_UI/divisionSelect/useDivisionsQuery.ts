import { getDivisions } from 'api/division/Division';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useQuery } from 'react-query';

const DEFAULT_DIVISIONS = (Name: string) => [{ IdDivision: 'all', Name }];

export const useDivisionsQuery = (withAll: boolean) => {
  const schema = useLanguageSchema();

  const query = useQuery(['divisions', 'control_ui'], async () => {
    const res = await getDivisions();
    return withAll ? DEFAULT_DIVISIONS(schema.all).concat(res.data) : res.data;
  });

  return query;
};
