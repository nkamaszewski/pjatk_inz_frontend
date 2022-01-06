import { useForm } from 'helpers/useForm';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  DateFrom: Yup.date()
    .transform((value, originalValue) => {
      return originalValue ? new Date(originalValue) : null;
    })
    .required('data jest wymagana'),
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
  IdDepartment: Yup.string().required('podanie wydziału jest wymagane'),
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
  IdRole: Yup.string().when('showEmployeeConfig', {
    is: true,
    then: (schema: any) => schema.required('podanie roli jest wymagane'),
  }),
});

export const useEmploymentForm = () => useForm(validationSchema);
