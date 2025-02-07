import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { noteType } from "../Data/notes";
import { notes } from "../Data/notes";

type NotesContextType = {
  notes: noteType[];
  modifyNotes: {
    addNote: (note: noteType) => void;
    removeNote: (note: noteType) => void;
    updateNote: (updatedNote: noteType) => void;
  };
};

const NotesContext = createContext<NotesContextType | null>(null);

const NotesContextProvider = ({ children }: { children: ReactNode }) => {
  const [noteList, setNoteList] = useState<noteType[]>(() => {
    try {
      const savedNotes = localStorage.getItem("notes");
      return savedNotes
        ? JSON.parse(savedNotes).map((note: noteType) => ({
            ...note,
            dateTime: new Date(note.dateTime),
            updatedAt: note.updatedAt ? new Date(note.updatedAt) : undefined,
          }))
        : notes;
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      return notes;
    }
  });

  const modifyNotes = {
    addNote(newNote: noteType) {
      const newNoteList = [...noteList, newNote];
      setNoteList(newNoteList);
    },
    removeNote(targetedNote: noteType) {
      const newNoteList = noteList.filter(
        (note) => note.id !== targetedNote.id
      );
      setNoteList(newNoteList);
    },
    updateNote(updatedNote: noteType) {
      const newNoteList = noteList.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      );
      setNoteList(newNoteList);
    },
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteList));
  }, [noteList]);

  return (
    <NotesContext.Provider value={{ notes: noteList, modifyNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("useNotes must be used within a NotesContextProvider.");
  }

  return context;
};

export { useNotes, NotesContextProvider };
