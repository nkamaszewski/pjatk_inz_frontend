import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useDictionary } from '../../contexts/DictionaryContext';
import { WorkshopStatus } from '../../contexts/FilterContext';
import { StatusDTO } from '../../types/DTO/Status';

const DEFAULT_STATUSES: StatusDTO[] = [{ IdStatus: 'all', Name: 'wszystkie' }];

interface Props {
  value: WorkshopStatus;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const StatusSelect = ({ value, onChange }: Props) => {
  const { statuses } = useDictionary();
  return (
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select value={value} onChange={onChange}>
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
