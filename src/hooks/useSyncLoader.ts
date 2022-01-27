import { useLoader } from 'providers/LoaderProvider';
import { useEffect } from 'react';

interface SyncLoader {
  isLoading: boolean;
}

export const useSyncLoader = ({ isLoading }: SyncLoader) => {
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    if (isLoading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [isLoading]);
};
