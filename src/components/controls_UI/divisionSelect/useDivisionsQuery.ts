import { getDivisions } from 'api/Division';
import { useLanguage } from 'providers/LanguageProvider';
import { useQuery } from 'react-query';
import { DivisionDTO } from 'types/DTO/Division';

const DEFAULT_DIVISIONS = (Name: string): DivisionDTO[] => [
  { IdDivision: 'all', Name },
];

export const useDivisionsQuery = (withAll: boolean) => {
  const {
    language: { schema },
  } = useLanguage();

  const query = useQuery(['divisions', 'control_ui'], async () => {
    const res = await getDivisions();
    return withAll ? DEFAULT_DIVISIONS(schema.all).concat(res.data) : res.data;
  });

  return query;
};
