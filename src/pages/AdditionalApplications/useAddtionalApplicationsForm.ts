import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    IdApplicationFor: Yup.string().required('pole jest wymagane'),
    IdReasonForRefund: Yup.string().required('pole jest wymagane'),
    IdStatus: Yup.string().required('pole jest wymagane'),
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
