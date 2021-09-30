import { createContext, ReactNode } from 'react';
import { useState, useContext } from 'react';

export const ALL = 'all';

interface IWorkshopFilters {
  idstatus: string;
  iddepartment: string;
  iddivision: string;
}

export interface ITrainingFilters {
  internal: typeof ALL | '1' | '2' | null;
}
export interface IGroupFilters {
  active: typeof ALL | '1';
}

const useCreateFilters = () => {
  const [workshopFilters, setWorkFilters] = useState<IWorkshopFilters>({
    idstatus: ALL,
    iddepartment: ALL,
    iddivision: ALL,
  });
  const [trainingFilters, setTrainingFilters] = useState<ITrainingFilters>({
    internal: ALL,
  });
  const [groupFilters, setGroupFilters] = useState<IGroupFilters>({
    active: ALL,
  });
  return {
    workshop: { filters: workshopFilters, setFilters: setWorkFilters },
    training: { filters: trainingFilters, setFilters: setTrainingFilters },
    group: { filters: groupFilters, setFilters: setGroupFilters },
  };
};

interface IFilterContext {
  workshop: {
    filters: IWorkshopFilters;
    setFilters: React.Dispatch<React.SetStateAction<IWorkshopFilters>>;
  };
  training: {
    filters: ITrainingFilters;
    setFilters: React.Dispatch<React.SetStateAction<ITrainingFilters>>;
  };
  group: {
    filters: IGroupFilters;
    setFilters: React.Dispatch<React.SetStateAction<IGroupFilters>>;
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
