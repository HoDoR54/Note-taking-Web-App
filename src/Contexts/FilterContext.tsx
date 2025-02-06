import { createContext, ReactNode, useContext, useState } from "react";

export type filterType = {
  type: "status" | "tag";
  name: string;
};

interface FilterContextType {
  currentFilter: filterType;
  switchFilter: (newFilter: filterType) => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

const FilterContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentFilter, setCurrentFilter] = useState<filterType>({
    type: "status",
    name: "all notes",
  });

  const switchFilter = (newFilter: filterType) => {
    setCurrentFilter(newFilter);
    console.log(newFilter);
  };

  return (
    <FilterContext.Provider value={{ currentFilter, switchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error(
      "useFilterContext must be used within a FilterContextProvider."
    );
  }

  return context;
};

export { FilterContextProvider, useFilterContext };
