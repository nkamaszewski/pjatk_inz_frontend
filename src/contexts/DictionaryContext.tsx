import { createContext, ReactNode, useEffect } from 'react';
import { useState, useContext } from 'react';
import { getStatuses } from '../api/Status';
import { StatusDTO } from '../types/DTO/Status';

const useCreateDictionary = () => {
  const [statuses, setStatuses] = useState<StatusDTO[]>([]);

  useEffect(() => {
    getStatuses()
      .then((response) => {
        setStatuses(response.data);
      })
      .catch((e) => {
        console.error('useCreateDictionary', e);
      });
  }, []);

  return { statuses, setStatuses };
};

interface IDictionaryContext {
  statuses: StatusDTO[];
}

export const DictionaryContext = createContext<IDictionaryContext | undefined>(
  undefined
);

export const DictionaryProvider = ({ children }: { children: ReactNode }) => {
  const dictionaries = useCreateDictionary();
  return (
    <DictionaryContext.Provider value={dictionaries}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  const dictionaryCtx = useContext(DictionaryContext);

  if (!dictionaryCtx) {
    throw new Error('useFilter is beyond FilterContext');
  }

  return dictionaryCtx;
};
