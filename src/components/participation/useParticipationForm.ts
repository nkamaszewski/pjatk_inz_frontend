import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    IdPerson: Yup.string().required('podanie pracownika jest wymagane'),
    DateOfRegistration: Yup.string().required(
      'podanie daty rejestracji jest wymagane'
    ),
    EndDate: Yup.date()
      .nullable()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null;
      })
      .when(
        'DateOfRegistration',
        (DateOfRegistration: Date | null, schema: any) =>
          DateOfRegistration &&
          schema.min(
            DateOfRegistration,
            'data do nie może być wcześniejsza od daty od'
          )
      ),
  });

export const useParticipationForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
