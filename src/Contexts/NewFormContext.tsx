import { createContext, ReactNode, useContext, useState } from "react";

type NewNoteContextType = {
  isCreatingNewNote: boolean;
  toggleForm: (newValue: boolean) => void;
};

const NewNoteContext = createContext<NewNoteContextType | null>(null);

const NewNoteContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCreatingNewNote, setIsCreatingNewNote] = useState<boolean>(false);

  const toggleForm = (newValue: boolean) => {
    setIsCreatingNewNote(newValue);
  };

  return (
    <NewNoteContext.Provider value={{ isCreatingNewNote, toggleForm }}>
      {children}
    </NewNoteContext.Provider>
  );
};

const useNewNoteConext = () => {
  const context = useContext(NewNoteContext);

  if (!context) {
    throw new Error(
      "useNewNoteContext must be used within a NewNoteContextProvider."
    );
  }

  return context;
};

export { useNewNoteConext, NewNoteContextProvider };
