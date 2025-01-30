import React, { ReactElement } from "react";

// Component Responsibility: to perform certain functionalities depending on the func props

interface SideBarItemProps {
  svg: ReactElement;
  text: string;
  border: boolean;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ svg, text, border }) => {
  return (
    <li
      className={`w-full rounded-md hover:bg-blue-100 pr-3 py-2 pl-5 cursor-pointer active:brightness-90 hover:text-black ${
        border && "border-[0.5px] border-gray-300 border-solid"
      }`}
    >
      {svg} {text}
    </li>
  );
};

export default SideBarItem;
