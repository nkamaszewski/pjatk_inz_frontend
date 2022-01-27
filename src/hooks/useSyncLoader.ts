import { useLoader } from 'providers/LoaderProvider';
import { useEffect } from 'react';

interface SyncLoader {
  text?: string;
  isLoading: boolean;
}

export const useSyncLoader = ({ text = '', isLoading }: SyncLoader) => {
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    if (isLoading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [isLoading]);
};
