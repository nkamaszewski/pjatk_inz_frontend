import { useEffect, useState } from 'react';
import { ISnackbar, SnackbarVariant } from '../contexts/NotificationContext';

const EMPTY_SNACKBAR = {
  open: false,
  message: '',
  variant: SnackbarVariant.success,
};

export const createSnackbarSuccess = (message: string): ISnackbar => ({
  open: true,
  message,
  variant: SnackbarVariant.success,
});

export const createSnackbarError = (message: string): ISnackbar => ({
  open: true,
  message,
  variant: SnackbarVariant.error,
});

const useNotification = () => {
  const [snackbar, setSnackbar]: [ISnackbar, Function] =
    useState(EMPTY_SNACKBAR);

  useEffect(() => {
    if (snackbar.open)
      setTimeout(
        () => setSnackbar({ ...snackbar, open: false, message: '' }),
        3000
      );
  }, [snackbar]);

  return { snackbar, setSnackbar };
};

export default useNotification;
