import React, { ReactElement, useContext } from "react";
import { FilterContext } from "../../Contexts/FilterContext";
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
  border,
  newFilter,
}) => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("Filter switch must be used within a Provider");
  }

  const { switchFilter } = context;

  return (
    <li
      className={`w-full rounded-md hover:bg-blue-100 pr-3 py-2 pl-5 cursor-pointer active:brightness-90 hover:text-black ${
        border && "border-[0.5px] border-gray-300 border-solid"
      }`}
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
}

export const ControlItem: React.FC<ControlItemProps> = ({ svg, text }) => {
  return (
    <li className="w-full rounded-md hover:bg-blue-100 pr-3 py-2 pl-5 cursor-pointer active:brightness-90 hover:text-black border-[0.5px] border-gray-300 border-solid">
      {svg} {text}
    </li>
  );
};
