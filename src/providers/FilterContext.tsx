import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import { useState, useContext } from 'react';

export const ALL = 'all';

interface IWorkshopFilters {
  idstatus: string;
  iddepartment: string;
  iddivision: string;
}

interface FilterSubject<T> {
  filters: T;
  setFilters: Dispatch<SetStateAction<T>>;
  handleSetFilter: ({ name, value }: { name: keyof T; value: unknown }) => void;
}

export interface ITrainingFilters {
  internal: typeof ALL | '1' | '2' | null;
}
export interface IGroupFilters {
  active: typeof ALL | '1';
}

export interface IMeetingFilters {
  idGroup: string;
  idRoom: string;
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
  const [meetingFilter, setMeetingFilter] = useState<IMeetingFilters>({
    idGroup: ALL,
    idRoom: ALL,
  });

  const handleSetFilter = <T,>(setFilters: Dispatch<SetStateAction<T>>) => {
    return ({ name, value }: { name: keyof T; value: unknown }) => {
      if (name) {
        setFilters((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    };
  };

  return {
    workshop: {
      filters: workshopFilters,
      setFilters: setWorkFilters,
      handleSetFilter: handleSetFilter(setWorkFilters),
    },
    training: {
      filters: trainingFilters,
      setFilters: setTrainingFilters,
      handleSetFilter: handleSetFilter(setTrainingFilters),
    },
    group: {
      filters: groupFilters,
      setFilters: setGroupFilters,
      handleSetFilter: handleSetFilter(setGroupFilters),
    },
    meeting: {
      filters: meetingFilter,
      setFilters: setMeetingFilter,
      handleSetFilter: handleSetFilter(setMeetingFilter),
    },
  };
};

interface IFilterContext {
  workshop: FilterSubject<IWorkshopFilters>;
  training: FilterSubject<ITrainingFilters>;
  group: FilterSubject<IGroupFilters>;
  meeting: FilterSubject<IMeetingFilters>;
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
