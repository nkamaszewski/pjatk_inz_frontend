import { Button, DialogActions } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';

interface DialogActionsProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const DialogActionsBtn = ({
  onConfirm,
  onCancel,
}: DialogActionsProps) => {
  const {
    language: { schema },
  } = useLanguage();
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
