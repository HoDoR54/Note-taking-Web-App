import React from "react";
import { noteType } from "../Data/notes";
import { useFilterContext } from "../Contexts/FilterContext";
import { useNotes } from "../Contexts/NotesContext";
import { useCurrentNote } from "../Contexts/CurrentNoteContext";

// Component Responsibility: to provide reusable tag UI

const TagOnPreview = ({ tagName }: { tagName: string }) => {
  return (
    <li className="bg-white rounded-full border-blue-200 border-2 inline-block w-max py-1 px-2 text-[0.8rem]">
      {tagName}
    </li>
  );
};

// Component Responsibility: to render a brief preview box for each note in the database

interface NotePreviewProps {
  noteDetails: noteType;
}

const NotePreview: React.FC<NotePreviewProps> = ({ noteDetails }) => {
  const { setCurrentNote } = useCurrentNote();

  return (
    <div
      className="p-3 rounded-md hover:bg-blue-100 cursor-pointer"
      onClick={() => {
        setCurrentNote(noteDetails);
      }}
    >
      <span className="text-[0.7rem] text-gray-600">
        {noteDetails.dateTime.toDateString()}
      </span>
      <h1 className="font-medium">{noteDetails.title}</h1>

      <p className="text-sm overflow-hidden text-gray-500 line-clamp-2">
        {noteDetails.note ? noteDetails.note : "This is an empty note"}
      </p>

      <ul className="flex gap-2 mt-3">
        {noteDetails.tags.map((tag, index) => (
          <TagOnPreview key={index} tagName={tag} />
        ))}
      </ul>
    </div>
  );
};

const Notes = () => {
  const { notes } = useNotes();
  const { currentFilter } = useFilterContext();
  let filteredNoteList: noteType[] = [];

  switch (currentFilter.type) {
    case "status":
      if (currentFilter.name === "all notes") {
        filteredNoteList = notes;
      } else if (currentFilter.name === "archived notes") {
        filteredNoteList = notes.filter((note) => note.status === "archived");
      } else if (currentFilter.name === "drafts") {
        filteredNoteList = notes.filter((note) => note.status === "draft");
      }
      break;
    case "tag":
      filteredNoteList = notes.filter((note) =>
        note.tags.toString().toLowerCase().includes(currentFilter.name)
      );
      break;
  }

  return (
    <div className="flex flex-col-reverse gap-3 p-3">
      {filteredNoteList.map((note, index) => (
        <NotePreview noteDetails={note} key={index} />
      ))}
    </div>
  );
};

export default Notes;
