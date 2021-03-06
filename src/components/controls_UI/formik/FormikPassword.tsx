import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { IconBtn } from '../../IconBtn';
import { FormikTextField } from './FormikTextField';

const FormikPasswordStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
  align-items: center;
`;

interface Props {
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error: string | undefined;
  touched: boolean | undefined;
  label?: string;
  autoFocus?: boolean;
}

const FormikPassword = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword((prev) => !prev);
  const schema = useLanguageSchema();

  return (
    <FormikPasswordStyled>
      <FormikTextField {...props} type={showPassword ? 'text' : 'password'} />
      <IconBtn
        title={showPassword ? schema.hidePassword : schema.showPassword}
        onClick={handleToggle}
        icon={showPassword ? faEyeSlash : faEye}
      />
    </FormikPasswordStyled>
  );
};

export default FormikPassword;
