import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useDictionary } from '../../providers/DictionaryContext';
import { StatusDTO } from '../../types/DTO/Status';
import { ErrorHelperText } from './ErrorHelperText';
import { FormControlStyled } from './FormControlStyled';

const DEFAULT_STATUSES = (Name: string): StatusDTO[] => [
  { IdStatus: 'all', Name },
];

interface Props {
  value: string;
  onChange: (id: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
}

const StatusSelect = ({
  value,
  onChange,
  onBlur,
  name,
  touched,
  error,
}: Props) => {
  const schema = useLanguageSchema();

  const { statuses } = useDictionary();
  return (
    <FormControlStyled>
      <InputLabel>{schema.status}</InputLabel>
      <Select
        value={value}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
          onChange(event.target.value as string)
        }
        onBlur={onBlur}
        name={name}
      >
        {DEFAULT_STATUSES(schema.all)
          .concat(statuses)
          .map(({ IdStatus, Name }) => (
            <MenuItem key={IdStatus} value={IdStatus}>
              {Name}
            </MenuItem>
          ))}
      </Select>
      {touched && error && <ErrorHelperText text={error} />}
    </FormControlStyled>
  );
};

export default StatusSelect;
