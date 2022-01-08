import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguage } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) => {
  return Yup.object().shape({
    newPassword: Yup.string()
      .required(schema.validation.passwordRequired)
      .min(5, schema.validation.passwordFormat),
    confirmedNewPassword: Yup.string()
      .required(schema.validation.passwordRequired)
      .oneOf([Yup.ref('newPassword')], schema.validation.passwordConfirmFormat),
  });
};

export const useChangePassowrdForm = () => {
  const {
    language: { schema },
  } = useLanguage();
  return useForm(validationSchema(schema));
};
