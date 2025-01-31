import { createContext, ReactNode, useState } from "react";
import { noteType } from "../Data/notes";
import { notes } from "../Data/notes";

type NotesContextType = {
  notes: noteType[];
  modifyNotes: {
    addNote: (note: noteType) => void;
    removeNote: (index: number) => void;
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
  };

  return (
    <NotesContext.Provider value={{ notes: noteList, modifyNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesContextProvider };
