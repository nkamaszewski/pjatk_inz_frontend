import { useEffect, useState } from 'react';
import { ISnackbar, SnackbarVariant } from '../contexts/NotificationContext';

const EMPTY_SNACKBAR = {
  open: false,
  message: '',
  variant: SnackbarVariant.success,
};

const useNotification = () => {
  const [snackbar, setSnackbar]: [ISnackbar, Function] =
    useState(EMPTY_SNACKBAR);

  useEffect(() => {
    setTimeout(() => setSnackbar(EMPTY_SNACKBAR), 3000);
  });

  return { snackbar, setSnackbar };
};

export default useNotification;
