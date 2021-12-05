import { useLanguage } from 'providers/LanguageProvider';
import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const useSetPasswordSchema = () => {
  const {
    language: {
      schema: { validation },
    },
  } = useLanguage();

  return Yup.object().shape({
    password: Yup.string()
      .required(validation.passwordRequired)
      .min(5, validation.passwordFormat),
    confirmPassword: Yup.string()
      .required(validation.passwordRequired)
      .oneOf([Yup.ref('password')], validation.passwordConfirmFormat),
  });
};

export function useFormikSetPassword<
  Values extends FormikValues = FormikValues
>({
  validateOnChange,
  validateOnBlur,
  validateOnMount,
  isInitialValid,
  enableReinitialize,
  onSubmit,
  ...rest
}: FormikConfig<Values>) {
  const formikSetPassword = useFormik({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    isInitialValid,
    enableReinitialize,
    onSubmit,
    ...rest,
    validationSchema: useSetPasswordSchema(),
  });

  return formikSetPassword;
}
