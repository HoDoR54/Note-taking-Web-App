import { svgIcons } from "../Data/SVGs";

const filters = [
  { svg: svgIcons.homeSvg, name: "All notes" },
  { svg: svgIcons.archivedNotesSvg, name: "Archived notes" },
  { svg: svgIcons.draftsSvg, name: "Drafts" },
];

const SideBarFilter = () => {
  return (
    <ul className="border-b-1 border-solid border-gray-300 py-3">
      {filters.map((filter) => (
        <li className="w-full rounded-r-full hover:bg-blue-100 pr-3 py-2 pl-5 cursor-pointer active:brightness-90 hover:text-black">
          {filter.svg}
          {filter.name}
        </li>
      ))}
    </ul>
  );
};

export default SideBarFilter;
