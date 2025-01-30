import { ControlItem } from "./UI/SideBarItem";
import { svgIcons } from "../Data/SVGs";

// Component Responsibility: to render control section

const ControlsSec = () => {
  return (
    <div className="col-span-2 shadow-md border-l border-gray-300 border-solid flex flex-col p-3">
      <ul className="flex flex-col gap-2">
        <ControlItem svg={svgIcons.archivedNotesSvg} text="Archive note" />
        <ControlItem svg={svgIcons.deleteSvg} text="Delete note" />
      </ul>
    </div>
  );
};

export default ControlsSec;
