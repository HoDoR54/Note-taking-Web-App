import { ReactNode } from "react";
import SideBar from "../components/SideBar";

interface DesktopLayoutProps {
  children: ReactNode;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  return (
    <section className="flex min-h-screen">
      <SideBar />
      {children}
    </section>
  );
};

export default DesktopLayout;
