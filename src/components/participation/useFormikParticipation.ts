import { FormikConfig, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

const participationSchema = Yup.object().shape({
  IdPerson: Yup.string().required('podanie pracownika jest wymagane'),
  DateOfRegistration: Yup.string().required(
    'podanie daty rejestracji jest wymagane'
  ),
  EndDate: Yup.string().required('podanie daty końca jest wymagane'),
});

export function useFormikParticipation<
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
  const formikParticipation = useFormik({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    isInitialValid,
    enableReinitialize,
    onSubmit,
    ...rest,
    validationSchema: participationSchema,
  });

  return formikParticipation;
}
