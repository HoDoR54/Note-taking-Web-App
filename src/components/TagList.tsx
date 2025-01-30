import { svgIcons } from "../Data/SVGs";
import SideBarItem from "./SideBarItem";
import { notes } from "../Data/notes";

// Component Responsibility: to display all the tags included in the data

let tags: string[] = [];

notes.forEach((note) => {
  const noteTags: string[] = note.tags;
  noteTags.forEach((noteTag) => {
    !tags.includes(noteTag.toLowerCase()) && tags.push(noteTag.toLowerCase());
  });
});

const TagList = () => {
  return (
    <div>
      <h1 className="pl-5 text-base text-gray-500 py-3">Tags</h1>
      <ul>
        {tags.map((tag, index) => (
          <SideBarItem
            key={index}
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
