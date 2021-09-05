import { createContext } from 'react';
import { useEffect, useState, useContext } from 'react';
import SnackbarNotification from '../components/SnackbarNotification';

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

  const setSuccessSnackbar = (message: string) =>
    setSnackbar(createSnackbarSuccess(message));
  const setErrorSnackbar = (message: string) =>
    setSnackbar(createSnackbarError(message));

  useEffect(() => {
    if (snackbar.open)
      setTimeout(
        () => setSnackbar({ ...snackbar, open: false, message: '' }),
        3000
      );
  }, [snackbar]);

  return { snackbar, setSnackbar, setSuccessSnackbar, setErrorSnackbar };
};

interface INotificationContext {
  snackbar: ISnackbar;
  setSnackbar: Function;
  setSuccessSnackbar: (message: string) => void;
  setErrorSnackbar: (message: string) => void;
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
      <SnackbarNotification />
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
