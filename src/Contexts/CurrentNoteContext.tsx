import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { noteType } from "../Data/notes";

type CurrentNoteContextType = {
  currentNote?: noteType;
  setCurrentNote: (newCurrentNote: noteType) => void;
};

const CurrentNoteContext = createContext<CurrentNoteContextType | null>(null);

const CurrentNoteContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentNote, setCurrentNote] = useState<noteType>(() => {
    const current = localStorage.getItem("current-note");
    if (current) {
      const parsed = JSON.parse(current);
      return {
        ...parsed,
        dateTime: new Date(parsed.dateTime),
        updatedAt: parsed.updatedAt ? new Date(parsed.dateTime) : undefined,
      };
    }
    return undefined;
  });

  useEffect(() => {
    localStorage.setItem("current-note", JSON.stringify(currentNote));
  }, [currentNote]);

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
