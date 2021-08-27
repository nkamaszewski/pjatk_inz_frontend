import Switch from '@material-ui/core/Switch';
import React from 'react';
import styled from 'styled-components';

const SwitchBtnStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

interface Props {
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const SwitchBtn = ({ value, onChange, label }: Props) => {
  return (
    <SwitchBtnStyle>
      <p>{label}</p>
      <Switch checked={value} onChange={onChange} color="primary" />
    </SwitchBtnStyle>
  );
};

export default SwitchBtn;
