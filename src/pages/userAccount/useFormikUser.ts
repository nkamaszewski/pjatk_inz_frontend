import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const UtworSchema = Yup.object().shape({
  // email: Yup.string()
  //   .required('podanie email / login jest wymagane')
  //   .email('niepoprawny format email'),
  // password: Yup.string().required('hasło jest wymagane'),
});

export function useFormikUser<Values extends FormikValues = FormikValues>({
  validateOnChange,
  validateOnBlur,
  validateOnMount,
  isInitialValid,
  enableReinitialize,
  onSubmit,
  ...rest
}: FormikConfig<Values>) {
  const formikUser = useFormik({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    isInitialValid,
    enableReinitialize,
    onSubmit,
    ...rest,
    validationSchema: UtworSchema,
  });

  return formikUser;
}
