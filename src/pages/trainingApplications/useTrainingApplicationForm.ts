import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    IdEducation: Yup.string().required('pole jest wymagane'),
    IdStatus: Yup.string().required('pole jest wymagane'),
    Compatibility: Yup.boolean().required('pole jest wymagane'),
  });

export const useTrainingApplicationForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
