import { ReactNode } from "react";
import SideBar from "../components/SideBar";

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
