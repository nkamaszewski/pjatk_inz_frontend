import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    Id: Yup.string().required('pole jest wymagane'),
    Name: Yup.string().required('pole jest wymagane'),
    DateOfSubmission: Yup.date()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null;
      })
      .required(schema.validation.dateRequired),
  });

export const useAddtionalApplicationsForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
