import { notes, noteType } from "../Data/notes";

const TagOnPreview = ({ tagName }: { tagName: string }) => {
  return (
    <li className="bg-white rounded-full cursor-pointer border-blue-200 border-2 inline-block w-max py-1 px-2 hover:bg-gray-200 text-[0.8rem]">
      {tagName}
    </li>
  );
};

const NotePreview = ({ noteDetails }: { noteDetails: noteType }) => {
  return (
    <div className="border-b-1 border-solid border-gray-300 pb-3">
      <span className="text-[0.6rem] text-gray-600">
        {noteDetails.dateTime.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <h1 className="font-medium">{noteDetails.title}</h1>

      <p className="text-sm text-gray-500">{noteDetails.note}</p>
      <ul className="flex gap-2 mt-3">
        {noteDetails.tags.map((tag) => (
          <TagOnPreview tagName={tag} />
        ))}
      </ul>
    </div>
  );
};

const Notes = () => {
  return (
    <div className="flex flex-col-reverse gap-3 p-3">
      {notes.map((note, index) => (
        <NotePreview noteDetails={note} key={index} />
      ))}
    </div>
  );
};

export default Notes;
