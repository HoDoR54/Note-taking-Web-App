import React from "react";

// Component Responsibility: to provide a reusable button

interface BtnProps {
  value: string;
  type: "primary" | "secondary";
  handleClick?: () => void;
  action?: "submit";
}

export const Btn: React.FC<BtnProps> = ({
  value,
  type,
  handleClick,
  action,
}) => {
  return (
    <button
      className={`rounded-md px-5 py-2 active:brightness-95 cursor-pointer hover:brightness-105 ${
        type === "primary" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
      onClick={handleClick}
      type={action}
    >
      {value}
    </button>
  );
};
