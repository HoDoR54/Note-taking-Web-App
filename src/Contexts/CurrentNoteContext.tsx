import { createContext, ReactNode, useState, useContext } from "react";
import { noteType } from "../Data/notes";

type CurrentNoteContextType = {
  currentNote?: noteType;
  setCurrentNote: (newCurrentNote: noteType) => void;
};

const CurrentNoteContext = createContext<CurrentNoteContextType | null>(null);

const CurrentNoteContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentNote, setCurrentNote] = useState<noteType>();

  return (
    <CurrentNoteContext.Provider value={{ currentNote, setCurrentNote }}>
      {children}
    </CurrentNoteContext.Provider>
  );
};

const useCurrentNote = () => {
  const context = useContext(CurrentNoteContext);

  if (!context) {
    throw new Error(
      "useCurrentNote must be used within a CurrentNoteContextProvider"
    );
  }

  return context;
};

export { useCurrentNote, CurrentNoteContextProvider };
