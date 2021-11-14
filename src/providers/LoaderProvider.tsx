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

  const startLoading = useCallback(() => setIsLoading(true), [setIsLoading]);
  const stopLoading = useCallback(() => setIsLoading(false), [setIsLoading]);

  return { isLoading, startLoading, stopLoading };
};

interface LoaderCtx {
  isLoading: boolean;
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
