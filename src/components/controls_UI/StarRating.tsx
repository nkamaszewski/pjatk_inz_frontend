import { Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { ErrorHelperText } from './ErrorHelperText';

interface StarRatingProps {
  value: number | null | undefined;
  onChange?: (rate: number | null) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  label?: string;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
}

export const StarRating = ({
  value,
  onChange,
  onBlur,
  name,
  label,
  touched,
  error,
  disabled,
}: StarRatingProps) => {
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">{label}</Typography>
      <Rating
        name={name}
        value={value}
        onChange={(event, newValue) => {
          if (onChange) {
            onChange(newValue);
          }
        }}
        onBlur={onBlur}
        disabled={disabled}
      />
      {touched && error && <ErrorHelperText text={error} />}
    </Box>
  );
};
