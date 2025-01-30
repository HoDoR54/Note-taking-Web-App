import { ReactNode } from "react";
import SideBar from "../components/SideBar";

// Component Responsibility: to provide a default layout for desktop screenn

export interface ChildrenPropType {
  children: ReactNode;
}

const DesktopLayout: React.FC<ChildrenPropType> = ({ children }) => {
  return (
    <section className="flex min-h-screen">
      <SideBar />
      {children}
    </section>
  );
};

export default DesktopLayout;
