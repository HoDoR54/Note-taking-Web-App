import Notes from "./Notes";
import { Btn } from "./Button";

export const PreviewSec = () => {
  return (
    <div className="shadow-md col-span-3 overflow-y-scroll border-r-1 border-gray-300 border-solid scrollbar-hide px-3">
      <div className="border-b-1 min-h-[4rem] border-solid border-gray-300 flex items-center justify-center">
        <Btn value="Add new note +" type="primary" />
      </div>
      <Notes />
    </div>
  );
};

export const NoteDisplaySec = () => {
  return <div className="col-span-7 flex flex-col px-3"></div>;
};

export const ControlsSec = () => {
  return (
    <div className="col-span-2 shadow-md border-l-1 border-gray-200 border-solid"></div>
  );
};
