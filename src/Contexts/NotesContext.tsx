import { createContext, ReactNode, useContext, useState } from "react";
import { noteType } from "../Data/notes";
import { notes } from "../Data/notes";

type NotesContextType = {
  notes: noteType[];
  modifyNotes: {
    addNote: (note: noteType) => void;
    removeNote: (index: number) => void;
    updateNote: (updatedNote: noteType) => void;
  };
};

const NotesContext = createContext<NotesContextType | null>(null);

const NotesContextProvider = ({ children }: { children: ReactNode }) => {
  const [noteList, setNoteList] = useState<noteType[]>(() => {
    const notelist = localStorage.getItem("notelist");
    return notelist ? JSON.parse(notelist) : notes;
  });

  const modifyNotes = {
    addNote(newNote: noteType) {
      const newNoteList = [...noteList, newNote];
      setNoteList(newNoteList);
    },
    removeNote(idx: number) {
      const newNoteList = noteList.filter((_, index) => idx !== index);
      setNoteList(newNoteList);
    },
    updateNote(updatedNote: noteType) {
      const newNoteList = noteList.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      );
      setNoteList(newNoteList);
    },
  };

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
