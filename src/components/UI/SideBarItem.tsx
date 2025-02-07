import React, { ReactElement } from "react";
import { useFilterContext } from "../../Contexts/FilterContext";
import { filterType } from "../../Contexts/FilterContext";

// Component Responsibility: to perform certain functionalities depending on the func props

interface SideBarItemProps {
  svg: ReactElement;
  text: string;
  border: boolean;
  newFilter: filterType;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  svg,
  text,
  newFilter,
}) => {
  const { switchFilter } = useFilterContext();

  return (
    <li
      className={`w-full rounded-md hover:bg-blue-100 pr-3 py-2 pl-5 cursor-pointer active:brightness-90 hover:text-black`}
      onClick={() => {
        switchFilter(newFilter);
      }}
    >
      {svg} {text}
    </li>
  );
};

interface ControlItemProps {
  svg: ReactElement;
  text: string;
  handleClick: () => void;
}

export const ControlItem: React.FC<ControlItemProps> = ({
  svg,
  text,
  handleClick,
}) => {
  return (
    <li
      onClick={handleClick}
      className="w-full rounded-md hover:bg-blue-100 pr-3 py-2 pl-5 cursor-pointer active:brightness-90 hover:text-black border-[0.5px] border-gray-300 border-solid"
    >
      {svg} {text}
    </li>
  );
};
