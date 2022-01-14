import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    IdParticipation: Yup.string().required(
      'podanie uczestnictwa jest wymagane'
    ),

    Issue1: Yup.number().required('ocena jest wymagana'),
    Issue2: Yup.number().required('ocena jest wymagana'),
    Issue3: Yup.number().required('ocena jest wymagana'),
    Issue4: Yup.number().required('ocena jest wymagana'),
    Issue5: Yup.number().required('ocena jest wymagana'),
  });

export const useScoreForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
