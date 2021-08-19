import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

const useSnackbar = () => {
  const snackbarCtx = useContext(NotificationContext);

  if (!snackbarCtx) {
    throw new Error('useSnackbar is beyond NotificationContext');
  }

  return snackbarCtx;
};

export default useSnackbar;
