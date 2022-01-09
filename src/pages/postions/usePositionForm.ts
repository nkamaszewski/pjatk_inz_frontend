import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    Name: Yup.string().required('podanie nazwy jest wymagane'),
  });

export const usePositionForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
