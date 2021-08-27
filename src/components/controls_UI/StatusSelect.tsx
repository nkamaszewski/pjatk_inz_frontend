import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useDictionary } from '../../contexts/DictionaryContext';
import { StatusDTO } from '../../types/DTO/Status';

const DEFAULT_STATUSES: StatusDTO[] = [{ IdStatus: 'all', Name: 'wszystkie' }];

interface Props {
  value: string;
  onChange: (
    event: React.ChangeEvent<{ value: unknown; name?: string | undefined }>
  ) => void;
  name?: string;
}

const StatusSelect = ({ value, onChange, name }: Props) => {
  const { statuses } = useDictionary();
  return (
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select value={value} onChange={onChange} name={name}>
        {DEFAULT_STATUSES.concat(statuses).map(({ IdStatus, Name }) => (
          <MenuItem key={IdStatus} value={IdStatus}>
            {Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StatusSelect;
