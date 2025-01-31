import { useState, useEffect } from "react";
import { noteType } from "../Data/notes";
import { Btn } from "./UI/Button";
import TextArea from "./TextArea";
import NoteMetaData from "./NoteMetaData";

// Component Responsibility: to render the note taking section components

interface NoteDisplaySecProps {
  currentNote: noteType | null;
}

const NoteDisplaySec: React.FC<NoteDisplaySecProps> = ({ currentNote }) => {
  const [textAreaValue, setTextAreaValue] = useState<any>();

  useEffect(() => {
    setTextAreaValue(currentNote?.note);
  }, [currentNote]);

  const handleInputChange = (value: any) => {
    setTextAreaValue(value);
  };

  return (
    <>
      {currentNote ? (
        <div className="col-span-7 flex flex-col px-3 overflow-y-scroll min-h-full scrollbar-hide">
          <NoteMetaData currentNote={currentNote} />
          <TextArea
            textAreaValue={textAreaValue}
            handleInputChange={handleInputChange}
          />

          {/* Save and commit changes */}
          <div className="flex gap-2 justify-start p-3 border-t border-gray-300 border-solid">
            <Btn value="Save note" type="primary" />
            <Btn value="Discard" type="secondary" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col gap-5 col-span-9">
          <h1 className="text-2xl font-bold text-gray-400">Welcome to Note</h1>
          <div className="flex gap-3">
            <span className="text-gray-400 text-[]0.7rem">
              create a new note
            </span>
            <div className="px-3 py1 bg-gray-400 rounded-lg text-white text-[0.7rem] flex items-center justify-center">
              Ctrl + Alt + N
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteDisplaySec;
