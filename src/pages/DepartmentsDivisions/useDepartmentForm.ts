import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    Name: Yup.string().required('podanie nazwy jest wymagane'),
    IdDivision: Yup.string().required('wybierz pion'),
  });

export const useDepartmentForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
