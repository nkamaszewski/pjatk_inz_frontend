import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const FieldStyle = styled.div`
  display: grid;
  margin: 8px 0;
  .error-message {
    color: red;
  }
`;

interface Props {
  name: string;
  value: string | number;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error: string | undefined;
  touched: boolean | undefined;
  label?: string;
  autoFocus?: boolean;
}

const FormikTextField = ({
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
    <FieldStyle>
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
      />
      {error && touched && <span className="error-message">{error}</span>}
    </FieldStyle>
  );
};

export default FormikTextField;
