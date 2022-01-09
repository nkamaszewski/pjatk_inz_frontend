import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    FirstName: Yup.string().required('imię jest wymagane'),
    LastName: Yup.string().required('nazwisko jest wymagane'),
    Email: Yup.string()
      .required('podanie email / login jest wymagane')
      .email('niepoprawny format email'),
    Phone: Yup.string().required('numer telefonu jest wymagany'),
  });

export const useUserForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
