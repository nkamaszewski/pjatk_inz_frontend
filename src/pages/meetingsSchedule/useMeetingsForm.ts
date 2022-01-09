import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    From: Yup.date()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null;
      })
      .required(schema.validation.dateRequired),
    To: Yup.date()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null;
      })
      .when(
        'From',
        (From: Date | null, schema: any) =>
          From &&
          schema.min(From, 'data do nie może być wcześniejsza od daty od')
      )
      .required(schema.validation.dateRequired),
    IdGroup: Yup.string().required('grupa jest wymagana'),
    IdRoom: Yup.string().required('sala jest wymagana'),
  });

export const useMeetingsForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
