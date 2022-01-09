import { Button, DialogActions } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';

interface DialogActionsProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const DialogActionsBtn = ({
  onConfirm,
  onCancel,
}: DialogActionsProps) => {
  const schema = useLanguageSchema();
  return (
    <DialogActions>
      <Button onClick={onCancel} color="primary">
        {schema.cancel}
      </Button>
      <Button onClick={onConfirm} color="primary">
        {schema.add}
      </Button>
    </DialogActions>
  );
};
