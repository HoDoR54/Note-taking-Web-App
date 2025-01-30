import { svgIcons } from "../Data/SVGs";
import SideBarItem from "./SideBarItem";

const filters = [
  { svg: svgIcons.homeSvg, name: "All notes" },
  { svg: svgIcons.archivedNotesSvg, name: "Archived notes" },
  { svg: svgIcons.draftsSvg, name: "Drafts" },
];

const SideBarFilter = () => {
  return (
    <ul className="border-b-1 border-solid border-gray-300 py-3">
      {filters.map((filter, index) => (
        <SideBarItem
          key={index}
          svg={filter.svg}
          text={filter.name}
          border={false}
        />
      ))}
    </ul>
  );
};

export default SideBarFilter;
