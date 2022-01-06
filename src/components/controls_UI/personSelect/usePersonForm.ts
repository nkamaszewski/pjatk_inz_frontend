import { useForm } from 'helpers/useForm';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required('imię jest wymagane'),
  LastName: Yup.string().required('nazwisko jest wymagane'),
  Email: Yup.string().email().required('email jest wymagane'),
  Phone: Yup.string()
    .required('nr telefonu jest wymagany')
    .min(9, 'telefon powinien miec co najmniej 9 cyfr'),
});

export const usePersonForm = () => useForm(validationSchema);
