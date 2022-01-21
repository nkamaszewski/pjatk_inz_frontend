import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { ErrorHelperText } from './ErrorHelperText';

interface Option {
  value: string;
  label: string;
}

interface RadioButtonsProps {
  value: string;
  onChange: (v: string) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  label?: string;
  options: Option[];
  name?: string;
  touched?: boolean;
  error?: string;
}

export const RadioButtons = ({
  value,
  onChange,
  onBlur,
  label,
  options,
  name,
  touched,
  error,
}: RadioButtonsProps) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {touched && error && <ErrorHelperText text={error} />}
    </FormControl>
  );
};
