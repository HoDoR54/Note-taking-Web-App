import { ReactNode } from "react";
import SideBar from "../components/SideBar";
import { FilterContextProvider } from "../Contexts/FilterContext";
import NewNoteForm from "../components/NewNoteForm";
import Overlay from "../components/UI/Overlay";
import { useNewNoteConext } from "../Contexts/NewFormContext";

export interface ChildrenPropType {
  children: ReactNode;
}

const DesktopLayout: React.FC<ChildrenPropType> = ({ children }) => {
  const { isCreatingNewNote } = useNewNoteConext();

  return (
    <FilterContextProvider>
      <section className="flex min-h-screen relative">
        <SideBar />
        {children}
        {isCreatingNewNote && (
          <Overlay>
            <NewNoteForm />
          </Overlay>
        )}
      </section>
    </FilterContextProvider>
  );
};

export default DesktopLayout;
