import Notes from "./Notes";
import { Btn } from "./Button";
import SideBarItem from "./SideBarItem";
import { svgIcons } from "../Data/SVGs";
import { noteType } from "../Data/notes";
import React, { useEffect, useState } from "react";

// Component Responsibility: to render preview section and pass functions

interface PreviewSecProps {
  setCurrentNote: (newCurrentNote: noteType) => void | null;
}

export const PreviewSec: React.FC<PreviewSecProps> = ({ setCurrentNote }) => {
  return (
    <div className="shadow-md col-span-3 overflow-y-scroll border-r border-gray-300 border-solid scrollbar-hide px-3">
      <div className="border-b min-h-[4rem] border-solid border-gray-300 flex items-center justify-center">
        <Btn value="Add new note +" type="primary" />
      </div>
      <Notes setCurrentNote={setCurrentNote} />
    </div>
  );
};

// Component Responsibility: to render the note taking section components

interface NoteDisplaySecProps {
  currentNoteDetails: noteType | null;
}

export const NoteDisplaySec: React.FC<NoteDisplaySecProps> = ({
  currentNoteDetails,
}) => {
  const [textAreaValue, setTextAreaValue] = useState(() => {
    return currentNoteDetails?.note && currentNoteDetails.note;
  });

  useEffect(() => {
    setTextAreaValue(currentNoteDetails?.note);
  }, [currentNoteDetails]);

  return (
    <>
      {currentNoteDetails ? (
        <div className="col-span-7 flex flex-col px-3 overflow-y-scroll min-h-full scrollbar-hide">
          {/* Note Metadata */}
          <div className="flex flex-col min-h-[4rem] justify-around border-b border-gray-300 py-3">
            <h1 className="text-lg font-semibold">
              {currentNoteDetails.title}
            </h1>
            <div className="flex flex-col gap-1 text-gray-700 text-sm w-max">
              <div className="grid grid-cols-3">
                <h2 className="col-span-2">tags:</h2>
                <p>
                  {currentNoteDetails.tags.map((tag, index) => (
                    <span key={index}>
                      {tag}
                      {currentNoteDetails.tags.length - index !== 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="grid grid-cols-3">
                <h2 className="col-span-2">last edited:</h2>
                <p>some date</p>
              </div>
              <div className="grid grid-cols-3">
                <h2 className="col-span-2">created:</h2>
                <p>{currentNoteDetails.dateTime.toDateString()}</p>
              </div>
            </div>
          </div>

          {/* Text Area */}
          <div className="flex-1">
            <textarea
              name=""
              id=""
              className="w-full h-full border-none p-2 focus:outline-0 resize-none"
              placeholder="Take your notes here..."
              value={textAreaValue}
              onChange={(e) => {
                setTextAreaValue(e.target.value);
              }}
            ></textarea>
          </div>

          {/* Save and commit changes */}
          <div className="flex gap-2 justify-start p-3 border-t border-gray-300 border-solid">
            <Btn value="Save note" type="primary" />
            <Btn value="Discard note" type="secondary" />
          </div>
        </div>
      ) : (
        <div className="text-gray-400 grid items-center justify-center text-2xl font-bold col-span-7">
          No data
        </div>
      )}
    </>
  );
};

// Component Responsibility: to render control section

export const ControlsSec = () => {
  return (
    <div className="col-span-2 shadow-md border-l border-gray-300 border-solid flex flex-col p-3">
      <ul className="flex flex-col gap-2">
        <SideBarItem
          svg={svgIcons.archivedNotesSvg}
          text="Archive note"
          border={true}
        />
        <SideBarItem
          svg={svgIcons.deleteSvg}
          text="Delete note"
          border={true}
        />
      </ul>
    </div>
  );
};
