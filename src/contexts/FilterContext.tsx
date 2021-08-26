import { createContext, ReactNode } from 'react';
import { useState, useContext } from 'react';

export type WorkshopStatus = 'all' | 1 | 2;

interface IWorkshopFilters {
  status: WorkshopStatus;
}

const useCreateFilters = () => {
  const [workshopFilters, setWorkFilters] = useState<IWorkshopFilters>({
    status: 'all',
  });
  return { workshop: { filters: workshopFilters, setFilters: setWorkFilters } };
};

interface IFilterContext {
  workshop: {
    filters: IWorkshopFilters;
    setFilters: React.Dispatch<React.SetStateAction<IWorkshopFilters>>;
  };
}

export const FilterContext = createContext<IFilterContext | undefined>(
  undefined
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const filters = useCreateFilters();
  return (
    <FilterContext.Provider value={filters}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const filterCtx = useContext(FilterContext);

  if (!filterCtx) {
    throw new Error('useFilter is beyond FilterContext');
  }

  return filterCtx;
};
