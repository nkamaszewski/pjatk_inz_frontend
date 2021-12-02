import axios from 'axios';
import { useSnackbar } from 'providers/NotificationContext';

export const useHandleHttpError = () => {
  const { setErrorSnackbar } = useSnackbar();

  return (error: any) => {
    if (axios.isAxiosError(error)) {
      setErrorSnackbar(error?.response?.data.message);
    } else {
      console.error(error);
    }
  };
};
