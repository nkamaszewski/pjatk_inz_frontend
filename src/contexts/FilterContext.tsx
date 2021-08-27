import { createContext, ReactNode } from 'react';
import { useState, useContext } from 'react';

export const ALL = 'all';

export type WorkshopStatus = typeof ALL | '1' | '2';

interface IWorkshopFilters {
  idstatus: WorkshopStatus;
  iddepartment: any;
  iddivision: any;
}

const useCreateFilters = () => {
  const [workshopFilters, setWorkFilters] = useState<IWorkshopFilters>({
    idstatus: ALL,
    iddepartment: null,
    iddivision: null,
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
