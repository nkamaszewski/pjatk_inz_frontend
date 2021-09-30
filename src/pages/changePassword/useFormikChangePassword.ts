import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const ChangePasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('podanie email / login jest wymagane')
    .email('niepoprawny format email'),
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
