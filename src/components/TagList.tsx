import { useContext, useMemo } from "react";
import { svgIcons } from "../Data/SVGs";
import { SideBarItem } from "./UI/SideBarItem";
import { NotesContext } from "../Contexts/NotesContext";

const TagList = () => {
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    throw new Error("The app should be nested within a provider");
  }

  const { notes } = notesContext;

  const tags = useMemo(() => {
    const uniqueTags: string[] = [];
    notes.forEach((note) => {
      note.tags.forEach((noteTag) => {
        const lowerTag = noteTag.toLowerCase();
        if (!uniqueTags.includes(lowerTag)) {
          uniqueTags.push(lowerTag);
        }
      });
    });
    return uniqueTags;
  }, [notes]);

  return (
    <div>
      <h1 className="pl-5 text-base text-gray-500 py-3">Tags</h1>
      <ul>
        {tags.map((tag) => (
          <SideBarItem
            key={tag}
            text={tag}
            svg={svgIcons.tagSvg}
            border={false}
            newFilter={{ type: "tag", name: tag }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TagList;
