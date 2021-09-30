import { createContext, ReactNode, useEffect } from 'react';
import { useState, useContext } from 'react';
import { getReasonsForRefund } from '../api/ReasonForRefund';
import { getStatuses } from '../api/Status';
import { ReasonForRefundDTO } from '../types/DTO/ReasonForRefund';
import { StatusDTO } from '../types/DTO/Status';

const useCreateDictionary = () => {
  const [statuses, setStatuses] = useState<StatusDTO[]>([]);
  const [reasonsForRefund, setReasonsForRefund] = useState<
    ReasonForRefundDTO[]
  >([]);

  useEffect(() => {
    getStatuses()
      .then((response) => {
        setStatuses(response.data);
      })
      .catch((e) => {
        console.error('useCreateDictionary, getStatuses', e);
      });
    getReasonsForRefund()
      .then((response) => {
        setReasonsForRefund(response.data);
      })
      .catch((e) => {
        console.error('useCreateDictionary, getReasonsForRefund', e);
      });
  }, []);

  return { statuses, setStatuses, reasonsForRefund, setReasonsForRefund };
};

interface IDictionaryContext {
  statuses: StatusDTO[];
  reasonsForRefund: ReasonForRefundDTO[];
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
