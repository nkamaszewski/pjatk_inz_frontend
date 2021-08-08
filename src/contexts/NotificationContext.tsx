import { createContext } from 'react';

export enum SnackbarVariant {
  success = 'success',
  error = 'error',
  warning = 'warning',
}

export interface ISnackbar {
  open: boolean;
  message: string;
  variant: SnackbarVariant;
}

interface INotificationContext {
  snackbar: ISnackbar;
  setSnackbar: Function;
}

export const NotificationContext = createContext({
  snackbar: { open: false, message: '', variant: SnackbarVariant.success },
  setSnackbar: (snackbar: ISnackbar) => {},
} as INotificationContext);
