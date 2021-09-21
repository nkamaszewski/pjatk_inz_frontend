import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const RestorePasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('podanie email / login jest wymagane')
    .email('niepoprawny format email'),
});

export function useFormikRestorePassword<
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
  const formikRestorePassword = useFormik({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    isInitialValid,
    enableReinitialize,
    onSubmit,
    ...rest,
    validationSchema: RestorePasswordSchema,
  });

  return formikRestorePassword;
}
