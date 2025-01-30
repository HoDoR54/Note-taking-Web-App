import { svgIcons } from "../Data/SVGs";
import SideBarItem from "./SideBarItem";

const Tags = ["Typescript", "Database", ".Net", "React"];

const TagList = () => {
  return (
    <div>
      <h1 className="pl-5 text-base text-gray-500 py-3">Tags</h1>
      <ul>
        {Tags.map((tag, index) => (
          <SideBarItem
            key={index}
            text={tag}
            svg={svgIcons.tagSvg}
            border={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default TagList;
