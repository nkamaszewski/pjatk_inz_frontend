import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { WorkshopStatus } from '../../contexts/FilterContext';

interface IStatus {
  id: WorkshopStatus;
  title: string;
}

const STATUSES: IStatus[] = [
  { id: 'all', title: 'wszystkie' },
  { id: 1, title: 'złożony' },
  { id: 2, title: 'zatwierdzony' },
];

interface Props {
  value: WorkshopStatus;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const StatusSelect = ({ value, onChange }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select value={value} onChange={onChange}>
        {STATUSES.map(({ id, title }) => (
          <MenuItem key={id} value={id}>
            {title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StatusSelect;
