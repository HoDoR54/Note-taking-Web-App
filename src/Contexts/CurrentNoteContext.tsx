import { createContext, ReactNode, useState } from "react";
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

export { CurrentNoteContext, CurrentNoteContextProvider };
