import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const ChangePasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('podanie email / login jest wymagane')
    .email('niepoprawny format email'),
  password: Yup.string()
    .required('hasło jest wymagane')
    .min(5, 'hasło powinno zawierać co najmniej 5 znaków'),
  confirmPassword: Yup.string()
    .required('hasło jest wymagane')
    .oneOf(
      [Yup.ref('password')],
      'hasło i powtórz hasło powinno być takie samo'
    ),
});

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
    validationSchema: ChangePasswordSchema,
  });

  return formikChangePassword;
}
