import { FormControl } from '@material-ui/core';
import { ReactNode } from 'react';

interface FormControlStyledProps {
  children: ReactNode;
}

export const FormControlStyled = ({ children }: FormControlStyledProps) => {
  return (
    <FormControl style={{ height: '72px' }} fullWidth>
      {children}
    </FormControl>
  );
};
