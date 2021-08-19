import { createContext } from 'react';
import { useEffect, useState, useContext } from 'react';

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

interface INotificationContext {
  snackbar: ISnackbar;
  setSnackbar: Function;
}

export const NotificationContext = createContext<
  INotificationContext | undefined
>(undefined);

export const NotificationProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const notification = useNotification();
  return (
    <NotificationContext.Provider value={notification}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useSnackbar = () => {
  const snackbarCtx = useContext(NotificationContext);

  if (!snackbarCtx) {
    throw new Error('useSnackbar is beyond NotificationContext');
  }

  return snackbarCtx;
};
