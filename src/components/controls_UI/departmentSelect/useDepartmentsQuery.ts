import { getDepartments } from 'api/Department';
import { useLanguage } from 'providers/LanguageProvider';
import { useQuery } from 'react-query';
import { DepartmentDTO } from 'types/DTO/Department';

const DEFAULT_DEPARTMENTS = (Name: string): DepartmentDTO[] => [
  { IdDepartment: 'all', Name } as DepartmentDTO,
];

export const useDepartmentsQuery = (withAll: boolean, idDivision = '') => {
  const {
    language: { schema },
  } = useLanguage();

  const query = useQuery(
    ['departments', 'control_ui', idDivision],
    async () => {
      const res = await getDepartments();
      let departments = res.data;

      if (idDivision) {
        departments = res.data.filter(
          ({ IdDivision }) => IdDivision === idDivision
        );
      }

      return withAll
        ? DEFAULT_DEPARTMENTS(schema.all).concat(departments)
        : departments;
    }
  );

  return query;
};
