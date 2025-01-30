import { ReactNode } from "react";
import SideBar from "../components/SideBar";
import { FilterContextProvider } from "../Contexts/FilterContext";

// Component Responsibility: to provide a default layout for desktop screenn

export interface ChildrenPropType {
  children: ReactNode;
}

const DesktopLayout: React.FC<ChildrenPropType> = ({ children }) => {
  return (
    <FilterContextProvider>
      <section className="flex min-h-screen">
        <SideBar />
        {children}
      </section>
    </FilterContextProvider>
  );
};

export default DesktopLayout;
