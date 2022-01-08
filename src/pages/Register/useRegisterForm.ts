import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguage } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    firstName: Yup.string().required('imię jest wymagane'),
    lastName: Yup.string().required('nazwisko jest wymagane'),
    email: Yup.string()
      .required('podanie email / login jest wymagane')
      .email('niepoprawny format email'),
    phone: Yup.string().required('numer telefonu jest wymagany'),
    pesel: Yup.string()
      .test(
        'pesel-register',
        'pesel powinien składać się z 11 cyfr',
        (pesel: string | undefined) => pesel?.length === 11
      )
      .required('pesel jest wymagany'),
    password: Yup.string().required('hasło jest wymagane'),
  });

export const useRegisterForm = () => {
  const {
    language: { schema },
  } = useLanguage();
  return useForm(validationSchema(schema));
};
