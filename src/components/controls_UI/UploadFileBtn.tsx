import { Button } from '@material-ui/core';
import { ErrorHelperText } from './ErrorHelperText';
import { FormControlStyled } from './FormControlStyled';

interface UploadFileBtnProps {
  label: string;
  name: string;
  value: File | null;
  onChange: (file: File) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  touched?: boolean;
  error?: string;
}

export const UploadFileBtn = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  touched,
  error,
}: UploadFileBtnProps) => {
  return (
    <FormControlStyled>
      <Button variant="contained" color="primary" component="label">
        {value ? value.name : label}
        <input
          hidden
          name={name}
          type="file"
          onChange={(event: any) => {
            const file = event.target.files[0];
            onChange(file);
          }}
          onBlur={onBlur}
        />
      </Button>
      {touched && error && <ErrorHelperText text={error} />}
    </FormControlStyled>
  );
};
