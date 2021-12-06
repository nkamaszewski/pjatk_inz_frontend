import { useLanguage } from 'providers/LanguageProvider';
import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const useChangePasswordSchema = () => {
  const {
    language: {
      schema: { validation },
    },
  } = useLanguage();

  return Yup.object().shape({
    newPassword: Yup.string()
      .required(validation.passwordRequired)
      .min(5, validation.passwordFormat),
    confirmedNewPassword: Yup.string()
      .required(validation.passwordRequired)
      .oneOf([Yup.ref('newPassword')], validation.passwordConfirmFormat),
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
