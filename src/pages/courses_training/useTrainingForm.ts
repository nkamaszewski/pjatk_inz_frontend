import { useForm } from 'helpers/useForm';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguageSchema } from 'providers/LanguageProvider';
import * as Yup from 'yup';

const validationSchema = (schema: LanguageSchema) =>
  Yup.object().shape({
    IdTopic: Yup.string().required('podanie tematu jest wymagane'),
    IdCompany: Yup.string().required('podanie firmy jest wymagane'),
    IdPerson: Yup.string().required('podanie uczestnika jest wymagane'),
    Internal: Yup.string().required(
      'podanie czy szkolenie jest wewnętrzne jest wymagane'
    ),
    DateFrom: Yup.date()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null;
      })
      .required(schema.validation.dateRequired),
    DateTo: Yup.date()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null;
      })
      .when(
        'DateFrom',
        (DateFrom: Date | null, schema: any) =>
          DateFrom &&
          schema.min(DateFrom, 'data do nie może być wcześniejsza od daty od')
      )
      .required(schema.validation.dateRequired),
    Price: Yup.number()
      .positive('cena musi być wynosić co najmniej 0')
      .required('podanie ceny jest wymagane'),
    PriceAccommodation: Yup.number()
      .positive('cena musi być wynosić co najmniej 0')
      .required('podanie ceny jest wymagane'),
    PriceTransit: Yup.number()
      .positive('cena musi być wynosić co najmniej 0')
      .required('podanie ceny jest wymagane'),
  });

export const useTrainingForm = () => {
  const schema = useLanguageSchema();
  return useForm(validationSchema(schema));
};
