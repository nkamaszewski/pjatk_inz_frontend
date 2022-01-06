import { FormControl, TextField } from '@material-ui/core';
import { ErrorHelperText } from '../ErrorHelperText';

interface Props {
  name: string;
  value: string | number | null;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error: string | undefined;
  touched: boolean | undefined;
  label?: string;
  autoFocus?: boolean;
}

export const FormikTextField = ({
  name,
  value,
  type = 'text',
  onChange,
  onFocus,
  onBlur,
  error,
  touched,
  label,
  autoFocus,
}: Props) => {
  return (
    <FormControl style={{ height: '72px' }}>
      <TextField
        name={name}
        type={type}
        value={value}
        label={label}
        autoFocus={autoFocus}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        InputLabelProps={{
          shrink: true,
        }}
      />
      {error && touched && <ErrorHelperText text={error} />}
    </FormControl>
  );
};
