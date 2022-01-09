import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    Name: Yup.string().required('podanie nazwy jest wymagane'),
    NumberOfPerson: Yup.number()
      .required('ilość uczestników jest wymagana')
      .min(1, 'minimalna ilość uczestników to 1'),
    IdEducation: Yup.string().required('podanie kursu jest wymagane'),
  });

export const useGroupForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
