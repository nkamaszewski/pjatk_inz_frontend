import { getDepartments } from 'api/Department';
import { useLanguage } from 'providers/LanguageProvider';
import { useQuery } from 'react-query';
import { DepartmentDTO } from 'types/DTO/Department';

const DEFAULT_DEPARTMENTS = (Name: string): DepartmentDTO[] => [
  { IdDepartment: 'all', Name } as DepartmentDTO,
];

export const useDepartmentsQuery = (withAll: boolean) => {
  const {
    language: { schema },
  } = useLanguage();
  const initialData = withAll ? DEFAULT_DEPARTMENTS(schema.all) : [];

  const query = useQuery(
    ['departments', 'control_ui'],
    async () => {
      const res = await getDepartments();
      return withAll
        ? DEFAULT_DEPARTMENTS(schema.all).concat(res.data)
        : res.data;
    },
    { initialData }
  );

  return query;
};
