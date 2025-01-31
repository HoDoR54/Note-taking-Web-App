import { ReactNode, useContext } from "react";
import { NewNoteContext } from "../Contexts/NewFormContext";
import SideBar from "../components/SideBar";
import { FilterContextProvider } from "../Contexts/FilterContext";
import NewNoteForm from "../components/NewNoteForm";
import Overlay from "../components/UI/Overlay";

export interface ChildrenPropType {
  children: ReactNode;
}

const DesktopLayout: React.FC<ChildrenPropType> = ({ children }) => {
  const context = useContext(NewNoteContext);

  if (!context) {
    throw new Error(
      "DesktopLayout must be used within a NewNoteContextProvider"
    );
  }

  const { isCreatingNewNote } = context;

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
