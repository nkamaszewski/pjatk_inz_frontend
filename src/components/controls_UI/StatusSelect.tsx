import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useDictionary } from '../../providers/DictionaryContext';
import { StatusDTO } from '../../types/DTO/Status';
import { FormControlStyled } from './FormControlStyled';

const DEFAULT_STATUSES = (Name: string): StatusDTO[] => [
  { IdStatus: 'all', Name },
];

interface Props {
  value: string;
  onChange: (
    event: React.ChangeEvent<{ value: unknown; name?: string | undefined }>
  ) => void;
  name?: string;
}

const StatusSelect = ({ value, onChange, name }: Props) => {
  const schema = useLanguageSchema();

  const { statuses } = useDictionary();
  return (
    <FormControlStyled>
      <InputLabel>{schema.status}</InputLabel>
      <Select value={value} onChange={onChange} name={name}>
        {DEFAULT_STATUSES(schema.all)
          .concat(statuses)
          .map(({ IdStatus, Name }) => (
            <MenuItem key={IdStatus} value={IdStatus}>
              {Name}
            </MenuItem>
          ))}
      </Select>
    </FormControlStyled>
  );
};

export default StatusSelect;
