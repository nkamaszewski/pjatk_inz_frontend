import { Loader } from 'components/Loader';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

const useCreateLoader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loaderText, setLoaderText] = useState('');

  const startLoading = useCallback(
    (text?: string) => {
      setIsLoading(true);
      if (text) {
        setLoaderText(text);
      }
    },
    [setIsLoading, setLoaderText]
  );
  const stopLoading = useCallback(() => {
    setIsLoading(false);
    setLoaderText('');
  }, [setIsLoading]);

  return { isLoading, loaderText, startLoading, stopLoading };
};

interface LoaderCtx {
  isLoading: boolean;
  loaderText: string;
  startLoading: () => void;
  stopLoading: () => void;
}

export const LoaderContext = createContext<LoaderCtx | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const loader = useCreateLoader();
  return (
    <LoaderContext.Provider value={loader}>
      <Loader />
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const loaderCtx = useContext(LoaderContext);

  if (!loaderCtx) {
    throw new Error('useLoader is beyond LoaderContext');
  }

  return loaderCtx;
};
