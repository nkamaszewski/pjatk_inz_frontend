import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const RemindSchema = Yup.object().shape({
  email: Yup.string()
    .required('podanie email / login jest wymagane')
    .email('niepoprawny format email'),
});

export function useFormikRemind<Values extends FormikValues = FormikValues>({
  validateOnChange,
  validateOnBlur,
  validateOnMount,
  isInitialValid,
  enableReinitialize,
  onSubmit,
  ...rest
}: FormikConfig<Values>) {
  const formikRemind = useFormik({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    isInitialValid,
    enableReinitialize,
    onSubmit,
    ...rest,
    validationSchema: RemindSchema,
  });

  return formikRemind;
}
