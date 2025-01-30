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
          <p>
            {currentNote.tags.map((tag, index) => (
              <span key={index}>
                {tag}
                {currentNote.tags.length - index !== 1 && ", "}
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
          <p>{currentNote.dateTime.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteMetaData;
