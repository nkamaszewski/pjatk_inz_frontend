import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguage } from 'providers/LanguageProvider';
import * as Yup from 'yup';

export const DIRECTOR_ID_ROLE = '3';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    DateFrom: Yup.date()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null;
      })
      .required(schema.validation.dateRequired),
    DateTo: Yup.date()
      .nullable()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null;
      })
      .when(
        'DateFrom',
        (DateFrom: Date | null, schema: any) =>
          DateFrom &&
          schema.min(DateFrom, 'data do nie może być wcześniejsza od daty od')
      ),
    IdRole: Yup.string().required('podanie roli jest wymagane'),
    IdDivision: Yup.string().required('podanie pionu jest wymagane'),
    IdDepartment: Yup.string().when('IdRole', {
      is: DIRECTOR_ID_ROLE,
      then: (schema: any) => schema.notRequired(),
      otherwise: (schema: any) => schema.required('pesel jest wymagany'),
    }),
    IdPosition: Yup.string().required('podanie stanowiska jest wymagane'),
    IdPerson: Yup.string().required('podanie osoby jest wymagane'),
    showEmployeeConfig: Yup.boolean(),
    Pesel: Yup.string().when('showEmployeeConfig', {
      is: true,
      then: (schema: any) =>
        schema
          .required('pesel jest wymagany')
          .test(
            'pesel-len',
            'pesel powinien składać się z 11 cyfr',
            (pesel: string) => pesel.length === 11
          ),
    }),
    Password: Yup.string().when('showEmployeeConfig', {
      is: true,
      then: (schema: any) => schema.required('hasło jest wymagane'),
    }),
  });

export const useEmploymentForm = () => {
  const {
    language: { schema },
  } = useLanguage();
  return useForm(validationSchema(schema));
};
