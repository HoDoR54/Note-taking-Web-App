import { ControlItem } from "./UI/SideBarItem";
import { svgIcons } from "../Data/SVGs";
import { useNotes } from "../Contexts/NotesContext";
import { useCurrentNote } from "../Contexts/CurrentNoteContext";

// Component Responsibility: to render control section

const ControlsSec = () => {
  const { notes, modifyNotes } = useNotes();
  const { currentNote } = useCurrentNote();

  const matchedNote = notes.find((note) => note.id === currentNote?.id);

  const handleArchive = () => {};

  return (
    <div className="col-span-2 shadow-md border-l border-gray-300 border-solid flex flex-col p-3">
      <ul className="flex flex-col gap-2">
        <ControlItem
          svg={svgIcons.archivedNotesSvg}
          text="Archive note"
          handleClick={() => {
            handleArchive;
          }}
        />
        <ControlItem
          svg={svgIcons.deleteSvg}
          text="Delete note"
          handleClick={
            matchedNote ? () => modifyNotes.removeNote(matchedNote) : () => {}
          }
        />
      </ul>
    </div>
  );
};

export default ControlsSec;
