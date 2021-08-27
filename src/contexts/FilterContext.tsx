import { createContext, ReactNode } from 'react';
import { useState, useContext } from 'react';

export const ALL = 'all';

interface IWorkshopFilters {
  idstatus: string;
  iddepartment: string;
  iddivision: string;
}

const useCreateFilters = () => {
  const [workshopFilters, setWorkFilters] = useState<IWorkshopFilters>({
    idstatus: ALL,
    iddepartment: ALL,
    iddivision: ALL,
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
