import { FormikValues, FormikConfig, useFormik } from 'formik';
import * as Yup from 'yup';

export const useForm = (validationSchema: Yup.AnySchema) => {
  return function useTemplateForm<Values extends FormikValues = FormikValues>({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    isInitialValid,
    enableReinitialize,
    onSubmit,
    ...rest
  }: FormikConfig<Values>) {
    const formik = useFormik({
      validateOnChange,
      validateOnBlur,
      validateOnMount,
      isInitialValid,
      enableReinitialize,
      onSubmit,
      ...rest,
      validationSchema,
    });

    return formik;
  };
};
