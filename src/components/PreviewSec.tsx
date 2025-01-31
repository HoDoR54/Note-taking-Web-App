import { noteType } from "../Data/notes";
import { Btn } from "./UI/Button";
import Notes from "./Notes";
import { useContext } from "react";
import { NewNoteContext } from "../Contexts/NewFormContext";

// Component Responsibility: to render preview section and pass functions

interface PreviewSecProps {
  setCurrentNote: (newCurrentNote: noteType) => void | null;
}

export const PreviewSec: React.FC<PreviewSecProps> = ({ setCurrentNote }) => {
  const context = useContext(NewNoteContext);

  if (!context) {
    throw new Error("PreviewSec must be used within a NewNoteContextProvider");
  }

  const { toggleForm } = context;

  return (
    <div className="shadow-md col-span-3 overflow-y-scroll border-r border-gray-300 border-solid scrollbar-hide px-3">
      <div className="border-b min-h-[4rem] border-solid border-gray-300 flex items-center justify-center">
        <Btn
          value="Add new note +"
          type="primary"
          handleClick={() => toggleForm(true)}
        />
      </div>
      <Notes setCurrentNote={setCurrentNote} />
    </div>
  );
};
