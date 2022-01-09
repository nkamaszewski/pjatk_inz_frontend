import { useLanguageSchema } from 'providers/LanguageProvider';
import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const useChangePasswordSchema = () => {
  const { validation } = useLanguageSchema();

  return Yup.object().shape({
    email: Yup.string()
      .required(validation.loginRequired)
      .email(validation.emailFormat),
    password: Yup.string()
      .required(validation.passwordRequired)
      .min(5, validation.passwordFormat),
    confirmPassword: Yup.string()
      .required(validation.passwordRequired)
      .oneOf([Yup.ref('password')], validation.passwordConfirmFormat),
  });
};

export function useFormikChangePassword<
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
  const formikChangePassword = useFormik({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    isInitialValid,
    enableReinitialize,
    onSubmit,
    ...rest,
    validationSchema: useChangePasswordSchema(),
  });

  return formikChangePassword;
}
