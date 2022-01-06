import { FormHelperText } from '@material-ui/core';

interface ErrorHelperTextProps {
  text: string;
}

export const ErrorHelperText = ({ text }: ErrorHelperTextProps) => {
  return <FormHelperText error>{text}</FormHelperText>;
};
