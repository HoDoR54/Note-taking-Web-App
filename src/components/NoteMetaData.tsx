import { noteType } from "../Data/notes";

interface NoteMetaDataProps {
  currentNote: noteType;
}

const NoteMetaData: React.FC<NoteMetaDataProps> = ({ currentNote }) => {
  return (
    <div className="flex flex-col min-h-[4rem] justify-around border-b border-gray-300 py-3">
      <h1 className="text-lg font-semibold">{currentNote.title}</h1>
      <div className="flex flex-col gap-1 text-gray-700 text-sm w-max">
        <div className="grid grid-cols-3">
          <h2 className="col-span-2">tags:</h2>
          <p>{currentNote.tags.join(", ")}</p>
        </div>
        <div className="grid grid-cols-3">
          <h2 className="col-span-2">last edited:</h2>
          <p>
            {currentNote.updatedAt ? currentNote.updatedAt.toDateString() : "_"}
          </p>
        </div>
        <div className="grid grid-cols-3">
          <h2 className="col-span-2">created:</h2>
          <p>{currentNote.dateTime.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteMetaData;
