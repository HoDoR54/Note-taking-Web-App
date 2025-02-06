import { Btn } from "./UI/Button";
import Notes from "./Notes";
import { useNewNoteConext } from "../Contexts/NewFormContext";

// Component Responsibility: to render preview section and pass functions

export const PreviewSec = () => {
  const { toggleForm } = useNewNoteConext();

  return (
    <div className="shadow-md col-span-3 overflow-y-scroll border-r border-gray-300 border-solid scrollbar-hide px-3">
      <div className="border-b min-h-[4rem] border-solid border-gray-300 flex items-center justify-center">
        <Btn
          value="Add new note +"
          type="primary"
          handleClick={() => toggleForm(true)}
        />
      </div>
      <Notes />
    </div>
  );
};
