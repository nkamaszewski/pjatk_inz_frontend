import Switch from '@material-ui/core/Switch';
import React from 'react';
import styled from 'styled-components';
import { ErrorHelperText } from './ErrorHelperText';

const SwitchBtnStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

interface Props {
  value: boolean;
  onChange: (checked: boolean) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  name?: string;
  touched?: boolean;
  error?: string;
  label?: string;
}

const SwitchBtn = ({
  value,
  onChange,
  label,
  onBlur,
  name,
  touched,
  error,
}: Props) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <SwitchBtnStyle>
      <p>{label}</p>
      <Switch
        checked={value}
        onChange={handleOnChange}
        onBlur={onBlur}
        color="primary"
        name={name}
      />
      {touched && error && <ErrorHelperText text={error} />}
    </SwitchBtnStyle>
  );
};

export default SwitchBtn;
