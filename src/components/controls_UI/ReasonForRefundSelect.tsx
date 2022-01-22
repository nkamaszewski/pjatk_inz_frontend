import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useDictionary } from '../../providers/DictionaryContext';
import { ErrorHelperText } from './ErrorHelperText';
import { FormControlStyled } from './FormControlStyled';

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

export const ReasonForRefundSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched,
  error,
}: Props) => {
  const schema = useLanguageSchema();

  const { reasonsForRefund } = useDictionary();
  return (
    <FormControlStyled>
      <InputLabel>{schema.reason}</InputLabel>
      <Select
        value={value}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
          onChange(event.target.value as string)
        }
        onBlur={onBlur}
        name={name}
      >
        {reasonsForRefund.map(({ IdReasonForRefund, Name }) => (
          <MenuItem key={IdReasonForRefund} value={IdReasonForRefund}>
            {Name}
          </MenuItem>
        ))}
      </Select>
      {touched && error && <ErrorHelperText text={error} />}
    </FormControlStyled>
  );
};
