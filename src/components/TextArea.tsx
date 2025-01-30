import React from "react";

interface TextAreaProps {
  textAreaValue: any;
  handleInputChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  textAreaValue,
  handleInputChange,
}) => {
  return (
    <div className="flex-1">
      <textarea
        name=""
        id=""
        className="w-full h-full border-none p-2 focus:outline-0 resize-none"
        placeholder="Take your notes here..."
        value={textAreaValue}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default TextArea;
